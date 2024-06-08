export { Tab0 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputEmailField } from "../../BaseForm/Fields/InputEmailField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

class Tab0 extends Tab {
  private debug: boolean = false;

  constructor(debug: boolean) {
    super();
    this.debug = debug;
    this.setHeader();
    this.setFields();
  }

  public setHeader(): void {
    // Images, titles, messages,
  }

  public setFields(): void {
    const exchange_visitor_last_name = new InputTextField({
      id: "exchange_visitor_last_name",
      labelText: t("Last Name"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: t(""), // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("Last Name"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["exchange_visitor_last_name"] = exchange_visitor_last_name;
    //this.fields["last_name"].showHelpMessage();  si queremos mostrar el texto de ayuda a pie de campo*/

    const exchange_visitor_first_name = new InputTextField({
      id: "exchange_visitor_first_name",
      labelText: t("First Name"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: t(
        "JavaScript enforces a pattern in which any class can inherit only from a single other class. Ninety-nine per cent of the time, that’s perfectly reasonable, and it keeps the inheritance system (which is already hard to learn) simple. However, this poses a challenge."
      ), // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen mas caracteres de los permitidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("First Name"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        // código extra ejecutar en la validación
        //this.checkFields();
      },
    });
    this.fields["exchange_visitor_first_name"] = exchange_visitor_first_name;

    const exchange_visitor_email = new InputEmailField({
      id: "exchange_visitor_email",
      labelText: t("Email address"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Email address"),
      validate_message: "",
      bad_characters_message: t("Email not valid"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["exchange_visitor_email"] = exchange_visitor_email;

    const exchange_visitor_country = new InputTextField({
      id: "exchange_visitor_country",
      labelText: t("Country of Origin"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Only letters allowed"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("Country of Origin"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["exchange_visitor_country"] = exchange_visitor_country;

    if (this.debug) {
      this.fields["exchange_visitor_first_name"].setValue("Piero");
      this.fields["exchange_visitor_last_name"].setValue("Del Castillo");
      this.fields["exchange_visitor_email"].setValue("piero@gmail.com");
      this.fields["exchange_visitor_country"].setValue("Peru");
    }
  }
}
