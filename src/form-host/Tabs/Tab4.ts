export { Tab4 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

class Tab4 extends Tab {
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
    const department_internship = new InputTextField({
      id: "department_internship",
      labelText: t("Department of Internship/Traineeship"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Department of Internship/Traineeship"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["department_internship"] = department_internship;

    const stipend_amount_per_month = new InputNumericField({
      id: "stipend_amount_per_month",
      labelText: t("Stipend Amount per Month (USD)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Stipend Amount per Month (USD)"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["stipend_amount_per_month"] = stipend_amount_per_month;

    const program_site_of_activity = new InputTextField({
      id: "program_site_of_activity",
      labelText: t("Site of Activity"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Site of Activity"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["program_site_of_activity"] = program_site_of_activity;

    const program_nearest_airport = new InputTextField({
      id: "program_nearest_airport",
      labelText: t("Nearest Airport"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Nearest Airport"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["program_nearest_airport"] = program_nearest_airport;

    const exchange_visitor_be_paid_receive_form = new InputRadioField({
      id: "exchange_visitor_be_paid_receive_form",
      labelText: t(
        "Will the Exchange Visitor be paid on payroll and receive a W-2 form?"
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
    this.fields["exchange_visitor_be_paid_receive_form"] =
      exchange_visitor_be_paid_receive_form;

    const contract_signed_between_intern_and_host = new InputRadioField({
      id: "contract_signed_between_intern_and_host",
      labelText: t(
        "Will a contract or agreement be signed between the intern or trainee and the Host Company?"
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
    this.fields["contract_signed_between_intern_and_host"] =
      contract_signed_between_intern_and_host;

    if (this.debug) {
      this.fields["department_internship"].setValue("Department");
      this.fields["stipend_amount_per_month"].setValue("100");
      this.fields["program_site_of_activity"].setValue("Milan Rd.");
      this.fields["program_nearest_airport"].setValue("Ohare Intl Airport");
      this.fields["exchange_visitor_be_paid_receive_form"].setValue(1);
      this.fields["contract_signed_between_intern_and_host"].setValue(1);
    }
  }
}
