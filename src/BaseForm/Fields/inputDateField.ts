export { InputDateField };

import { FieldParamsInterface } from "../Inteface/FieldParamsInterface";
import { Field } from "../Field/Field";

class InputDateField extends Field {
  private params: FieldParamsInterface;
  private field: HTMLInputElement;

  constructor(params: FieldParamsInterface) {
    super(params);
    this.params = params;
    this.field = this.wrapper.querySelector(
      'input[name="' + this.params.id + '"]'
    ) as HTMLInputElement;
    this.setPlaceHolder(params.placeHolder);

    this.field.addEventListener("change", (e) => {
      this.validate();
    });
  }

  public setPlaceHolder(placeHolder: string | null | undefined): void {
    if (placeHolder !== null && placeHolder !== undefined) {
      this.field.placeholder = placeHolder;
    }
  }

  public getValue(): string | string[] {
    return this.field.value;
  }
  public setValue(value: string): void {
    this.field.value = value;
  }
  public validate(): boolean {
    const field = this.field as HTMLInputElement;
    const format =
      /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/;
    this.pass = format.test(field.value);
    if (field.value === "") {
      if (this.params.required) {
        this.fail(this.params.errorText);
        this.pass = false;
      }
    } else {
      var dateYear = new Date(field.value).getFullYear();
      if (dateYear < 1800 || dateYear > 2100) {
        this.fail(this.params.validate_message);
        this.pass = false;
        return this.pass;
      } else {
        this.pass === false
          ? this.fail(this.params.validate_message)
          : this.success();
      }
    }

    if (this.pass) {
      if (this.params.validate_clbk) {
        var x = this.params.validate_clbk(this);
        if (typeof x === "string") {
          if (x) {
            this.fail(x);
            this.pass = false;
          }
        }
      }
    }

    return this.pass;
  }
}
