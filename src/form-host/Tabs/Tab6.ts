export { Tab6 };

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
import { InputTextAreaField } from "../../BaseForm/Fields/InputTextAreaField";

class Tab6 extends Tab {
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
    const transportation_to_host_company_available = new InputCheckBoxField({
      id: "transportation_to_host_company_available",
      labelText: t(
        "What means of transportation will be available for the intern or trainee’s commute to the Host Company site of activity?"
      ),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: "",

      checkBoxOptions: [
        { label: t("Subway"), value: "0" },
        { label: t("Bus"), value: "1" },
        { label: t("Walk"), value: "2" },
        { label: t("Other"), value: "3" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["transportation_to_host_company_available"] =
      transportation_to_host_company_available;

    const personal_expenses_other_description = new InputTextField({
      id: "personal_expenses_other_description",
      labelText: t("Please describe other"),
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
    this.fields["personal_expenses_other_description"] =
      personal_expenses_other_description;

    const advice_purchase_automobile = new InputRadioField({
      id: "advice_purchase_automobile",
      labelText: t("Do you advise the purchase/lease of an automobile?"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: "",
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
    this.fields["advice_purchase_automobile"] = advice_purchase_automobile;

    const estimate_monthly_transportation_expenses = new InputNumericField({
      id: "estimate_monthly_transportation_expenses",
      labelText: t(
        "Please provide a rough estimate of monthly transportation expenses:"
      ),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("USD"),
      lengthMessage: t(""),
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["estimate_monthly_transportation_expenses"] =
      estimate_monthly_transportation_expenses;

    const provide_assistance_finding_housing = new InputRadioField({
      id: "provide_assistance_finding_housing",
      labelText: t(
        "Will the Host Company provide any assistance in finding housing for the intern or trainee?"
      ),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: "",
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
    this.fields["provide_assistance_finding_housing"] =
      provide_assistance_finding_housing;

    const provide_assistance_finding_housing_description =
      new InputTextAreaField({
        id: "provide_assistance_finding_housing_description",
        labelText: t("If yes, please describe"),
        helpText: "",
        errorText: t("Field cannot be empty"),
        infoText: "",
        lengthMessage: "",
        bad_characters_message: t("Invalid characters"),
        placeHolder: t("Describe"),
        validate_message: "",
        required: false,
        language: getLanguage(),
        validate_clbk: (field: any) => {
          //this.checkFields();
        },
      });
    this.fields["provide_assistance_finding_housing_description"] =
      provide_assistance_finding_housing_description;

    const room_board_monthly_cost = new InputNumericField({
      id: "room_board_monthly_cost",
      labelText: t("Room"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("USD"),
      lengthMessage: t(""),
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["room_board_monthly_cost"] = room_board_monthly_cost;

    if (this.debug) {
      this.fields["transportation_to_host_company_available"].setValue("1,2");
      this.fields["advice_purchase_automobile"].setValue(1);
      this.fields["estimate_monthly_transportation_expenses"].setValue(150);
      this.fields["provide_assistance_finding_housing"].setValue(1);
      this.fields["provide_assistance_finding_housing_description"].setValue(
        "LOREMIPSUM"
      );
      this.fields["room_board_monthly_cost"].setValue(100);
    }
  }
}
