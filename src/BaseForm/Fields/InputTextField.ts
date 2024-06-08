export { InputTextField };

import { FieldParamsInterface } from "../Inteface/FieldParamsInterface";
import { Field } from "../Field/Field";

class InputTextField extends Field {

    private params: FieldParamsInterface;
    private field: HTMLInputElement;

    constructor(params: FieldParamsInterface) {
        super(params);
        this.params = params;
        this.field = this.wrapper.querySelector('input[name="' + this.params.id + '"]') as HTMLInputElement;
        this.setPlaceHolder(params.placeHolder);

        this.field.addEventListener('change', e => {
            this.validate();
        });
    }

    public setPlaceHolder(placeHolder: string | null | undefined): void {
        if(placeHolder !== null && placeHolder !== undefined) {
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
		const invalidChars = /[!@#%^*()$_+\=\[\]{};:"\\|<>\/?~]/;
		var validChars = false;
		var validMinlength = true;
        var validMaxlength = true;
        var validlength = false;

		this.pass = false;

        // has content
        if (field.value.trim() !== "") {
            
            if (this.params.minLength !== undefined) {
                validMinlength = field.value.trim().length < this.params.minLength ? false : true;
            }

            if (this.params.maxLength !== undefined) {
                validMaxlength = field.value.trim().length > this.params.maxLength ? false : true;
            }

            validlength = (validMinlength && validMaxlength) ? this.success() : this.fail(this.params.lengthMessage);

			if (validlength) {
				validChars = (invalidChars.test(field.value.trim()) === true) ? this.fail(this.params.bad_characters_message) : this.success();
			}
			this.pass = (validChars && validlength) ? true : false;
        }

        // no content
        if (field.value.trim() === "") {
            if (this.required) {
                validlength = field.value.trim().length < 2 ? this.fail(this.params.errorText) : this.success();
				this.pass = validlength;
            } else { // no es obligatorio
                this.pass = true;
            }
        }

        if (this.pass) {
			if (this.params.validate_clbk) {
                this.params.validate_clbk(this);
			}
		}

        return this.pass;
    }

}