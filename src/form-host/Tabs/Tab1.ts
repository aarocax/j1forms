export { Tab1 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputEmailField } from "../../BaseForm/Fields/InputEmailField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";
import { InputDateField } from "../../BaseForm/Fields/inputDateField";
import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";

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
    const host_company_name = new InputTextField({
      id: "host_company_name",
      labelText: t("Host Company Name"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Host Company Name"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["host_company_name"] = host_company_name;

    const company_website = new InputTextField({
      id: "company_website",
      labelText: t("Company website"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Company website"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["company_website"] = company_website;

    const host_company_street_address = new InputTextField({
      id: "host_company_street_address",
      labelText: t("Street Address"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: "",
      bad_characters_message: t("Invalid characters"),
      placeHolder: t("Street Address"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["host_company_street_address"] = host_company_street_address;

    const host_company_city = new InputTextField({
      id: "host_company_city",
      labelText: t("City"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Invalid characters"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("City"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["host_company_city"] = host_company_city;

    const host_company_state = new InputTextField({
      id: "host_company_state",
      labelText: t("State"),
      helpText: "", // texto de ayuda a pie de campo
      errorText: t("Field cannot be empty"), // Texto error cuando el campo está vacío
      infoText: "", // texto informativo al pinchar sobre ?
      lengthMessage: "", // texto cuado se introducen carvateres no válidos
      bad_characters_message: t("Invalid characters"), // texto cuado se introducen carvateres no válidos
      placeHolder: t("State"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["host_company_state"] = host_company_state;

    const host_company_zip_code = new InputNumericField({
      id: "host_company_zip_code",
      labelText: t("Zip code"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Zip code"),
      lengthMessage: t("Invalid zip code"),
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      minLength: 5,
      maxLength: 6,
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["host_company_zip_code"] = host_company_zip_code;

    const employees_companywide_number = new InputNumericField({
      id: "employees_companywide_number",
      labelText: t("Total # of Employees Companywide"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Total # of Employees Companywide"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["employees_companywide_number"] = employees_companywide_number;

    const employees_site_of_activity_number = new InputNumericField({
      id: "employees_site_of_activity_number",
      labelText: t("# of Employees at Site of Activity"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("# of Employees at Site of Activity"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["employees_site_of_activity_number"] =
      employees_site_of_activity_number;

    const exchange_visitors = new InputNumericField({
      id: "exchange_visitors",
      labelText: t("# of Exchange Visitors at Site of Activity"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("# of Exchange Visitors at Site of Activity"),
      lengthMessage: "",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["exchange_visitors"] = exchange_visitors;

    const date_business_began = new InputDateField({
      id: "date_business_began",
      labelText: t("Date Business Began"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: "",
      validate_message: t("Date not valid"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        var dateYear = new Date(field.field.value);
        var actualYear = new Date();
        if (dateYear > actualYear) {
          return t("Must be a past date");
        } else {
          return "";
        }
      },
    });
    this.fields["date_business_began"] = date_business_began;

    const employer_identification_number = new InputNumericField({
      id: "employer_identification_number",
      labelText: t("Employer Identification Number (EIN)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Employer Identification Number (EIN)"),
      lengthMessage: "Only 2 char allowed here",
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["employer_identification_number"] =
      employer_identification_number;

    const workers_compensation_insurance_policy_provider_number =
      new InputTextField({
        id: "workers_compensation_insurance_policy_provider_number",
        labelText: t(
          "Workers Compensation Insurance Policy Provider AND Policy Number"
        ),
        helpText: "",
        errorText: t("Field cannot be empty"),
        infoText: "",
        lengthMessage: "",
        bad_characters_message: "",
        placeHolder: t(
          "Workers Compensation Insurance Policy Provider AND Policy Number"
        ),
        validate_message: "",
        required: true,
        language: getLanguage(),
        validate_clbk: (field: any) => {
          //this.checkFields();
        },
      });
    this.fields["workers_compensation_insurance_policy_provider_number"] =
      workers_compensation_insurance_policy_provider_number;

    const company_previously_participated_susccj1visa_program =
      new InputRadioField({
        id: "company_previously_participated_susccj1visa_program",
        labelText: t(
          "The company has previously participated in the SUSCC J-1 Visa Program:"
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
    this.fields["company_previously_participated_susccj1visa_program"] =
      company_previously_participated_susccj1visa_program;

    const company_companywide_anual_revenue = new InputRadioField({
      id: "company_companywide_anual_revenue",
      labelText: t("The company has a companywide annual revenue in USD of:"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: "",
      radios: [
        { label: t("$0-3 million"), value: "0" },
        { label: t("$3-10 million"), value: "1" },
        { label: t("$10-25 million"), value: "2" },
        { label: t("$25 million or more"), value: "3" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["company_companywide_anual_revenue"] =
      company_companywide_anual_revenue;

    if (this.debug) {
      this.fields["host_company_name"].setValue("Company");
      this.fields["company_website"].setValue("company.com");
      this.fields["host_company_street_address"].setValue("calle Rosal");
      this.fields["host_company_city"].setValue("sandusky");
      this.fields["host_company_state"].setValue("ohio");
      this.fields["host_company_zip_code"].setValue("04000");
      this.fields["employees_companywide_number"].setValue("50");
      this.fields["employees_site_of_activity_number"].setValue("50");
      this.fields["exchange_visitors"].setValue("50");
      this.fields["date_business_began"].setValue("2020-12-12");
      this.fields["employer_identification_number"].setValue("1234567");
      this.fields[
        "workers_compensation_insurance_policy_provider_number"
      ].setValue("123456");
      this.fields[
        "company_previously_participated_susccj1visa_program"
      ].setValue(1);
      this.fields["company_companywide_anual_revenue"].setValue(1);
    }
  }
}
