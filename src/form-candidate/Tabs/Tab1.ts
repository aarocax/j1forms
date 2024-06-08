export { Tab1 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputDateField } from "../../BaseForm/Fields/inputDateField";

class Tab1 extends Tab {
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
    const english_language_level = new InputRadioField({
      id: "english_language_level",
      labelText: t("English language level"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: t(""),
      radios: [
        { label: t("Fair"), value: "0" },
        { label: t("Good"), value: "1" },
        { label: t("Above average"), value: "2" },
        { label: t("Fluent"), value: "3" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["english_language_level"] = english_language_level;

    const name_of_school_1 = new InputTextField({
      id: "name_of_school_1",
      labelText: t("Name of school and location"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Name of school and location"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["name_of_school_1"] = name_of_school_1;

    const date_of_study_1 = new InputTextField({
      id: "date_of_study_1",
      labelText: t("Dates of study(month & year)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Dates of study(month & year)"),
      validate_message: t("Date not valid"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["date_of_study_1"] = date_of_study_1;

    const major_fields_of_study_1 = new InputTextField({
      id: "major_fields_of_study_1",
      labelText: t("Major field(s) of study"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Major field(s) of study"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["major_fields_of_study_1"] = major_fields_of_study_1;

    const degrees_or_certificates_1 = new InputTextField({
      id: "degrees_or_certificates_1",
      labelText: t("Degree(s) or Certificate(s)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Degree(s) or Certificate(s)"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["degrees_or_certificates_1"] = degrees_or_certificates_1;

    const name_of_school_2 = new InputTextField({
      id: "name_of_school_2",
      labelText: t("Name of school and location"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Name of school and location"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["name_of_school_2"] = name_of_school_2;

    const date_of_study_2 = new InputTextField({
      id: "date_of_study_2",
      labelText: t("Dates of study(month & year)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Dates of study(month & year)"),
      validate_message: t("Date not valid"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["date_of_study_2"] = date_of_study_2;

    const major_fields_of_study_2 = new InputTextField({
      id: "major_fields_of_study_2",
      labelText: t("Major field(s) of study"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Major field(s) of study"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["major_fields_of_study_2"] = major_fields_of_study_2;

    const degrees_or_certificates_2 = new InputTextField({
      id: "degrees_or_certificates_2",
      labelText: t("Degree(s) or Certificate(s)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Degree(s) or Certificate(s)"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["degrees_or_certificates_2"] = degrees_or_certificates_2;

    if (this.debug) {
      this.fields["english_language_level"].setValue(3);
    }
  }
}
