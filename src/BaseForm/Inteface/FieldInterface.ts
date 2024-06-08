export { FieldInterface }

interface FieldInterface {
    showField(show: boolean): void;
    getValue(): string | string[];
    setValue(value: string | number): void;
        
    setValid(valid: boolean): void;
    validate(): boolean;
    isValid(): boolean;
    
    setHelpMessage(message: string): void;
    showHelpMessage(): void;
    hideHelpMessage(): void;

    setInfoMessage(message: string): void;
    showInfoMessage(): void;
    hideInfoMessage(): void;

    setErrorMessage(message: string): void;
    showErrorMessage(): void;
    hideErrorMessage(): void;

    
}