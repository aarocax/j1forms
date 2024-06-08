export { InputCheckBoxField };

import {
  FieldParamsInterface,
  CheckBoxOption,
} from "../Inteface/FieldParamsInterface";
import { Field } from "../Field/Field";

class InputCheckBoxField extends Field {
  private params: FieldParamsInterface;

  constructor(params: FieldParamsInterface) {
    super(params);
    this.params = params;
    if (this.params.checkBoxOptions) {
      this.setCheckBox(this.params.checkBoxOptions);
    }
  }

  public setCheckBox(checkBoxes: CheckBoxOption[]): void {
    const checkBoxesContainer = this.wrapper.querySelector(
      '[data-id="checkbox-container"]'
    ) as HTMLDivElement;
    checkBoxesContainer.innerHTML = "";
    checkBoxes.forEach((checkBox) => {
      const checkBoxTpl = this.checkBoxTemplate(
        this.id,
        checkBox.value,
        checkBox.label,
        false
      );
      checkBoxesContainer.appendChild(checkBoxTpl);
    });

    this.changeEvent();
  }

  private checkBoxTemplate(
    name: string,
    value: string,
    label: string,
    checked: boolean
  ): Node {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = name;
    input.value = value;
    input.id = name + "_" + value;
    if (checked) {
      input.checked = true;
    }
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", input.id);
    labelElement.innerHTML = label;
    labelElement.prepend(input);
    div.appendChild(labelElement);
    return div;
  }

  /**
   * Llama a la función de validación del campo cada vez que este cambia de valor.
   *
   * @private
   * @memberof InputTypeRadioField
   */
  private changeEvent(): void {
    const checkInputs: NodeListOf<HTMLInputElement> =
      this.wrapper.querySelectorAll(
        'input[type="checkbox"][name="' + this.id + '"]'
      );
    checkInputs.forEach((check) => {
      check.addEventListener("change", (ev: any) => {
        if (ev.currentTarget.checked) {
          this.validate();
        }
      });
    });
  }

  public getValue(): string | string[] {
    let selectedValue: string[] = [];
    const checkInputs: NodeListOf<HTMLInputElement> =
      this.wrapper.querySelectorAll(
        'input[type="checkbox"][name="' + this.id + '"]'
      );
    checkInputs.forEach((checkInput) => {
      if (checkInput.checked) {
        selectedValue.push(checkInput.value);
      }
    });
    return selectedValue;
  }

  public setValue(value: string | number): void {
    let arrayValue = value.toString().split(",");
    const checkInputs: NodeListOf<HTMLInputElement> =
      this.wrapper.querySelectorAll(
        'input[type="checkbox"][name="' + this.id + '"]'
      );
    checkInputs.forEach((checkInput, idx) => {
      const checkOption: HTMLInputElement | null = this.wrapper.querySelector(
        'input[type="checkbox"][value="' + arrayValue[idx] + '"]'
      ) as HTMLInputElement;
      if (checkOption) {
        checkOption.checked = true;
      }
    });
  }

  /**
   * Valida si el campo tiene contenido y si el contenido es correcto
   *
   * @return {*}  {boolean}
   * @memberof InputTypeCheckBoxField
   */
  public validate(): boolean {
    if (this.required === false) {
      this.pass = true;
    } else {
      const field = this.wrapper as HTMLElement;
      this.pass = this.getValue().length === 0 ? this.fail() : this.success();
    }
    return this.pass;
  }
}
