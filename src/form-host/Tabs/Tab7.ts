export { Tab7 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";
import { InputFileField } from "../../BaseForm/Fields/inputFileField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

class Tab7 extends Tab {
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
    const upload_document_1 = new InputFileField({
      id: "upload_document_1",
      labelText: t("Document 1"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: t("upload document 1"),
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t(""),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["upload_document_1"] = upload_document_1;

    const upload_document_2 = new InputFileField({
      id: "upload_document_2",
      labelText: t("Document 2"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: t("upload document 2upload document 1"),
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t(""),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["upload_document_2"] = upload_document_2;

    const upload_document_3 = new InputFileField({
      id: "upload_document_3",
      labelText: t("Document 3"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: t("upload document 3"),
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t(""),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["upload_document_3"] = upload_document_3;
  }
}
