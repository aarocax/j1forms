export { InputFileField };

import { FieldParamsInterface } from "../Inteface/FieldParamsInterface";
import { Field } from "../Field/Field";

class InputFileField extends Field {
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
    
    if (field.value === "") {
      this.fail(this.params.errorText);
    } else {
      this.success();
    }

    if (this.pass) {
      if (this.params.validate_clbk) {
        this.params.validate_clbk(this);
      }
    }

    return this.pass;
  }
}
