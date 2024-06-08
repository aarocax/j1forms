export { Tab5 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

class Tab5 extends Tab {
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
    const host_company_providing = new InputCheckBoxField({
      id: "host_company_providing",
      labelText: t(
        "Please check the box if the Host Company will provide any of the following"
      ),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: "",
      checkBoxOptions: [
        { label: t("Housing"), value: "0" },
        { label: t("Transportation"), value: "1" },
        { label: t("Flight Expense"), value: "2" },
        { label: t("Other"), value: "3" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["host_company_providing"] = host_company_providing;

    const financial_arrangements_housing = new InputNumericField({
      id: "financial_arrangements_housing",
      labelText: t("Housing "),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("$000"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["financial_arrangements_housing"] =
      financial_arrangements_housing;

    const financial_arrangements_transportation = new InputNumericField({
      id: "financial_arrangements_transportation",
      labelText: t("Transportation"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("$000"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["financial_arrangements_transportation"] =
      financial_arrangements_transportation;

    const financial_arrangements_flight_expense = new InputNumericField({
      id: "financial_arrangements_flight_expense",
      labelText: t("Flight Expense"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("$000"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["financial_arrangements_flight_expense"] =
      financial_arrangements_flight_expense;

    const financial_arrangements_other_description = new InputTextField({
      id: "financial_arrangements_other_description",
      labelText: t("Please describe"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Describe other"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["financial_arrangements_other_description"] =
      financial_arrangements_other_description;

    const financial_arrangements_other_amount = new InputNumericField({
      id: "financial_arrangements_other_amount",
      labelText: t("Other"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("$000"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["financial_arrangements_other_amount"] =
      financial_arrangements_other_amount;

    if (this.debug) {
      this.fields["host_company_providing"].setValue("0,1,2");
      this.fields["financial_arrangements_housing"].setValue("100");
      this.fields["financial_arrangements_transportation"].setValue("150");
      this.fields["financial_arrangements_flight_expense"].setValue("124");
    }
  }
}
