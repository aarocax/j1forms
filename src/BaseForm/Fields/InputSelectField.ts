export { InputSelectField };

import { FieldParamsInterface, SelectOption } from "../Inteface/FieldParamsInterface";
import { Field } from "../Field/Field";

class InputSelectField extends Field {

    private params: FieldParamsInterface;
    private select: HTMLSelectElement;

    constructor(params: FieldParamsInterface) {
        super(params);
        this.params = params;
        this.select = this.wrapper.querySelector('select[name="'+this.params.id+'"]') as HTMLSelectElement;
        if (this.params.options) {
            this.setOptions(this.params.options);
        }
    }

    public setOptions(options: SelectOption[]): void {
        if (this.params.placeHolder) {
            const option = document.createElement('option');
            option.value = "";
            option.text = this.params.placeHolder;
            option.selected = true;
            this.select.appendChild(option);
        }
        options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.text = optionData.label;
            this.select.appendChild(option);
        });
        this.changeEvent();
    }

    private changeEvent(): void {
		this.select.addEventListener('change', () => {
			this.validate();
		});
	}

    public getValue(): string {
        return this.select.value;
    }

    public setValue(value: string): void {
        this.select.value = value
    }
    
    public validate(): boolean {
        if (this.required === false) {
            this.pass = true;
        } else {
            this.pass = this.getValue().trim() === '' ? this.fail() : this.success();
        }
        return this.pass
    }

}