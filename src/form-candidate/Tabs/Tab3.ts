export { Tab3 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";
import { InputTextAreaField } from "../../BaseForm/Fields/InputTextAreaField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";

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
    const health_medically_fit = new InputRadioField({
      id: "health_medically_fit",
      labelText: t("Are you medically fit?"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: t(""),
      radios: [
        { label: t("Yes"), value: "1" },
        { label: t("No"), value: "0" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["health_medically_fit"] = health_medically_fit;

    const health_no_medically_fit_detail = new InputTextAreaField({
      id: "health_no_medically_fit_detail",
      labelText: t("If No, please detail below"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Details"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["health_no_medically_fit_detail"] =
      health_no_medically_fit_detail;

    const health_physical_handicap = new InputRadioField({
      id: "health_physical_handicap",
      labelText: t("Do you have a physical handicap?"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: t(""),
      radios: [
        { label: t("Yes"), value: "1" },
        { label: t("No"), value: "0" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["health_physical_handicap"] = health_physical_handicap;

    const health_physical_handicap_detail = new InputTextAreaField({
      id: "health_physical_handicap_detail",
      labelText: t("If Yes, please detail below"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Details"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["health_physical_handicap_detail"] =
      health_physical_handicap_detail;

    const emergency_person_name_and_address = new InputTextField({
      id: "emergency_person_name_and_address",
      labelText: t("Name and address"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Name and address"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["emergency_person_name_and_address"] =
      emergency_person_name_and_address;

    const emergency_person_telephone = new InputNumericField({
      id: "emergency_person_telephone",
      labelText: t("Telephone"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Telephone"),
      lengthMessage: t("Too much chars"),
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["emergency_person_telephone"] = emergency_person_telephone;

    const emergency_person_relationship = new InputTextField({
      id: "emergency_person_relationship",
      labelText: t("If a relative, cite relationship"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Relationship"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["emergency_person_relationship"] =
      emergency_person_relationship;

    if (this.debug) {
      this.fields["health_medically_fit"].setValue(1);
      this.fields["health_physical_handicap"].setValue(1);
      this.fields["emergency_person_name_and_address"].setValue(
        "calle rosales"
      );
      this.fields["emergency_person_telephone"].setValue("12345");
    }
  }
}
