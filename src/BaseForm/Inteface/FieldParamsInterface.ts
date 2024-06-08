export { FieldParamsInterface, InputRadio, CheckBoxOption, SelectOption }

interface FieldParamsInterface {
    id: string;
    labelText: string;
    helpText: string;
    errorText: string;
    infoText: string;
    lengthMessage?: string;
    placeHolder?: string;
    validate_message?: string;
    bad_characters_message?: string;
    radios?: InputRadio[];
    checkBoxOptions?: CheckBoxOption[];
    options?: SelectOption[];
    required: boolean;
    language: string;
    minLength?: number;
    maxLength?: number;
    validate_clbk?: (t: any) => void;
}

interface InputRadio {
    label: string;
    value: string;
}

interface CheckBoxOption {
    label: string;
    value: string;
}

interface SelectOption {
    label: string;
    value: string;
}