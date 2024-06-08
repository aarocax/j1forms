export { Tab3 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";
import { InputEmailField } from "../../BaseForm/Fields/InputEmailField";
import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

class Tab3 extends Tab {
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
    const direct_supervisor_treatment = new InputRadioField({
      id: "direct_supervisor_treatment",
      labelText: t("Treatment"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: "",
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
    this.fields["direct_supervisor_treatment"] = direct_supervisor_treatment;

    const direct_supervisor_full_name = new InputTextField({
      id: "direct_supervisor_full_name",
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

    this.fields["direct_supervisor_full_name"] = direct_supervisor_full_name;

    const direct_supervisor_title = new InputTextField({
      id: "direct_supervisor_title",
      labelText: "Title",
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: "Title",
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

    this.fields["direct_supervisor_title"] = direct_supervisor_title;

    const direct_supervisor_telephone = new InputTextField({
      id: "direct_supervisor_telephone",
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

    this.fields["direct_supervisor_telephone"] = direct_supervisor_telephone;

    const direct_supervisor_fax = new InputTextField({
      id: "direct_supervisor_fax",
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

    this.fields["direct_supervisor_fax"] = direct_supervisor_fax;

    const direct_supervisor_email = new InputEmailField({
      id: "direct_supervisor_email",
      labelText: t("Email"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Email"),
      validate_message: "",
      bad_characters_message: t("Email not valid."),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["direct_supervisor_email"] = direct_supervisor_email;

    if (this.debug) {
      this.fields["direct_supervisor_treatment"].setValue(0);
      this.fields["direct_supervisor_full_name"].setValue("Jorge Rosales");
      this.fields["direct_supervisor_title"].setValue("Dr.");
      this.fields["direct_supervisor_telephone"].setValue("123456");
      this.fields["direct_supervisor_fax"].setValue("1234");
      this.fields["direct_supervisor_email"].setValue("mail@mail.com");
    }
  }
}
