export { Tab2 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputEmailField } from "../../BaseForm/Fields/InputEmailField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

class Tab2 extends Tab {
  private debug: boolean = false;

  constructor(debug: boolean) {
    super();
    this.debug = debug;
    this.setHeader();
    this.setFields();
  }

  public setHeader(): void {
    // Images, titles, messages, ...
  }

  public setFields(): void {
    const company_representative_treatment = new InputRadioField({
      id: "company_representative_treatment",
      labelText: t("Treatment"),
      helpText: "",
      errorText: "Select an option",
      infoText: "",
      placeHolder: t("Treatment"),
      radios: [
        { label: t("Mr."), value: "1" },
        { label: t("Mrs."), value: "0" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["company_representative_treatment"] =
      company_representative_treatment;

    const company_representative_full_name = new InputTextField({
      id: "company_representative_full_name",
      labelText: t("Full Name"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("Full Name"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        // código extra ejecutar en la validación
        //this.checkFields();
      },
    });

    this.fields["company_representative_full_name"] =
      company_representative_full_name;

    const company_representative_title = new InputTextField({
      id: "company_representative_title",
      labelText: t("Title"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("Title"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      minLength: 3,
      maxLength: 10,
      validate_clbk: (field: any) => {
        // código extra ejecutar en la validación
        //this.checkFields();
      },
    });

    this.fields["company_representative_title"] = company_representative_title;

    const company_representative_telephone = new InputTextField({
      id: "company_representative_telephone",
      labelText: t("Telephone"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("Telephone"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      minLength: 3,
      maxLength: 10,
      validate_clbk: (field: any) => {
        // código extra ejecutar en la validación
        //this.checkFields();
      },
    });

    this.fields["company_representative_telephone"] =
      company_representative_telephone;

    const company_representative_fax = new InputTextField({
      id: "company_representative_fax",
      labelText: t("Fax"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("Fax"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      minLength: 3,
      maxLength: 10,
      validate_clbk: (field: any) => {
        // código extra ejecutar en la validación
        //this.checkFields();
      },
    });

    this.fields["company_representative_fax"] = company_representative_fax;

    const company_representative_email = new InputEmailField({
      id: "company_representative_email",
      labelText: t("Email"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Email"),
      validate_message: "",
      bad_characters_message: t("Email not valid"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["company_representative_email"] = company_representative_email;

    if (this.debug) {
      this.fields["company_representative_treatment"].setValue(0);
      this.fields["company_representative_full_name"].setValue("Jorge Rosales");
      this.fields["company_representative_title"].setValue("Dr.");
      this.fields["company_representative_telephone"].setValue("123456");
      this.fields["company_representative_fax"].setValue("1234");
      this.fields["company_representative_email"].setValue("mail@mail.com");
    }
  }
}
