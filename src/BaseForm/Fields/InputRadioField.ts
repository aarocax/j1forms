export { InputRadioField };

import {
  FieldParamsInterface,
  InputRadio,
} from "../Inteface/FieldParamsInterface";
import { Field } from "../Field/Field";

class InputRadioField extends Field {
  private params: FieldParamsInterface;
  private field: HTMLInputElement;

  constructor(params: FieldParamsInterface) {
    super(params);
    this.params = params;
    this.field = this.wrapper.querySelector(
      'input[name="' + this.params.id + '"]'
    ) as HTMLInputElement;
    if (this.params.radios) {
      this.setRadios(this.params.radios);
    }
  }

  public setRadios(radios: InputRadio[]): void {
    const radiosContainer = this.wrapper.querySelector(
      '[data-id="radios-container"]'
    ) as HTMLDivElement;
    radiosContainer.innerHTML = "";
    radios.forEach((radio) => {
      const radioTpl = this.radioTemplate(
        this.id,
        radio.value,
        radio.label,
        false
      );
      radiosContainer.appendChild(radioTpl);
    });

    this.changeEvent();
  }

  private radioTemplate(
    name: string,
    value: string,
    label: string,
    checked: boolean
  ): Node {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = value;
    input.id = name + "_" + value;
    if (checked) {
      input.checked = true;
    }
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", input.id);
    labelElement.innerHTML = label;
    div.appendChild(input);
    div.appendChild(labelElement);
    div.addEventListener("click", (e) => {
      e.stopPropagation();
      input.click();
    });
    return div;
  }

  /**
   * Llama a la función de validación del campo cada vez que este cambia de valor.
   *
   * @private
   * @memberof InputTypeRadioField
   */
  private changeEvent(): void {
    const radioInputs: NodeListOf<HTMLInputElement> =
      this.wrapper.querySelectorAll(
        'input[type="radio"][name="' + this.id + '"]'
      );
    radioInputs.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          this.validate();
        }
      });
    });
  }

  public getValue(): string {
    let selectedValue = "";
    const radioInputs: NodeListOf<HTMLInputElement> =
      this.wrapper.querySelectorAll(
        'input[type="radio"][name="' + this.id + '"]'
      );
    radioInputs.forEach((radioInput) => {
      if (radioInput.checked) {
        selectedValue = radioInput.value;
      }
    });
    return selectedValue;
  }

  public setValue(value: string): void {
    const radioOption: HTMLInputElement | null = this.wrapper.querySelector(
      'input[type="radio"][value="' + value + '"]'
    ) as HTMLInputElement;
    if (radioOption) {
      radioOption.checked = true;
    }
  }

  public validate(): boolean {
    if (this.required === false) {
      this.pass = true;
    } else {
      this.pass = this.getValue().trim() === "" ? this.fail() : this.success();
    }
    return this.pass;
  }
}
