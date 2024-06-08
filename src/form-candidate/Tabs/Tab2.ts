export { Tab2 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputEmailField } from "../../BaseForm/Fields/InputEmailField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";

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
    const name_and_address_of_employer_1 = new InputTextField({
      id: "name_and_address_of_employer_1",
      labelText: t("Name and address of employer "),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Name and address of employer "),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["name_and_address_of_employer_1"] =
      name_and_address_of_employer_1;

    const date_of_work_1 = new InputTextField({
      id: "date_of_work_1",
      labelText: t("Dates of work(month & year)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Dates of work(month & year)"),
      validate_message: t("Date not valid"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["date_of_work_1"] = date_of_work_1;

    const job_title_or_position_1 = new InputTextField({
      id: "job_title_or_position_1",
      labelText: t("Job title or position"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Job title or position"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["job_title_or_position_1"] = job_title_or_position_1;

    const name_and_address_of_employer_2 = new InputTextField({
      id: "name_and_address_of_employer_2",
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
    this.fields["name_and_address_of_employer_2"] =
      name_and_address_of_employer_2;

    const date_of_work_2 = new InputTextField({
      id: "date_of_work_2",
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
    this.fields["date_of_work_2"] = date_of_work_2;

    const job_title_or_position_2 = new InputTextField({
      id: "job_title_or_position_2",
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
    this.fields["job_title_or_position_2"] = job_title_or_position_2;
  }
}
