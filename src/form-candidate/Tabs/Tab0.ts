export { Tab0 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputEmailField } from "../../BaseForm/Fields/InputEmailField";
import { InputNumericField } from "../../BaseForm/Fields/InputNumericField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";

import {
  translator as t,
  language as getLanguage,
} from "../../BaseForm/Translations/Translator";
import { InputDateField } from "../../BaseForm/Fields/inputDateField";
import { InputTextAreaField } from "../../BaseForm/Fields/InputTextAreaField";
import { Value } from "sass";

class Tab0 extends Tab {
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
    const biographic_data_last_name = new InputTextField({
      id: "biographic_data_last_name",
      labelText: t("Last Name"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Last Name"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_last_name"] = biographic_data_last_name;

    const biographic_data_first_name = new InputTextField({
      id: "biographic_data_first_name",
      labelText: t("First Name"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("First Name"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_first_name"] = biographic_data_first_name;

    const biographic_data_gender = new InputRadioField({
      id: "biographic_data_gender",
      labelText: t("Gender"),
      helpText: "",
      errorText: t("Select an option"),
      infoText: "",
      placeHolder: t(""),
      radios: [
        { label: t("Male"), value: "1" },
        { label: t("Female"), value: "0" },
      ],
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_gender"] = biographic_data_gender;

    const biographic_data_email = new InputEmailField({
      id: "biographic_data_email",
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
    this.fields["biographic_data_email"] = biographic_data_email;

    const biographic_data_current_telephone = new InputNumericField({
      id: "biographic_data_current_telephone",
      labelText: t("Current telephone (where you will receive documents)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Current telephone (where you will receive documents)"),
      lengthMessage: t("Too much chars"),
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_current_telephone"] =
      biographic_data_current_telephone;

    const biographic_data_permanent_foreign_address = new InputTextAreaField({
      id: "biographic_data_permanent_foreign_address",
      labelText: t(
        "Permanent foreign address (as it should appear on envelope)"
      ),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t(
        "Permanent foreign address (as it should appear on envelope)"
      ),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_permanent_foreign_address"] =
      biographic_data_permanent_foreign_address;

    const biographic_data_current_mailing_address = new InputTextAreaField({
      id: "biographic_data_current_mailing_address",
      labelText: t(
        "Current mailing address for receiving documents from the Spain-U.S. Chamber of Commerce (as it should appear on envelope)"
      ),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t(
        "Current mailing address for receiving documents from the Spain-U.S. Chamber of Commerce (as it should appear on envelope)"
      ),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_current_mailing_address"] =
      biographic_data_current_mailing_address;

    const biographic_data_passport_number = new InputNumericField({
      id: "biographic_data_passport_number",
      labelText: t("Passport number"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: t("Passport number"),
      lengthMessage: t("Invalid number"),
      validate_message: "",
      bad_characters_message: t("Only numbers allowed"),
      required: true,
      minLength: 9,
      maxLength: 9,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_passport_number"] =
      biographic_data_passport_number;

    const biographic_data_passport_expiration_date = new InputDateField({
      id: "biographic_data_passport_expiration_date",
      labelText: t("Passport expiration date"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: "",
      validate_message: t("Date not valid"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        var date = new Date(field.field.value);
        var actualDate = new Date();
        if (date < actualDate) {
          return t("Passport already expired");
        } else {
          return "";
        }
      },
    });
    this.fields["biographic_data_passport_expiration_date"] =
      biographic_data_passport_expiration_date;

    const biographic_data_date_of_birth = new InputDateField({
      id: "biographic_data_date_of_birth",
      labelText: t("Date of birth"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: "",
      validate_message: t("Date not valid"),
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        var dateYear = new Date(field.field.value).getFullYear();
        var actualYear = new Date().getFullYear();
        if (actualYear - dateYear < 18) {
          return t("Must be older than 18");
        } else {
          return "";
        }
      },
    });
    this.fields["biographic_data_date_of_birth"] =
      biographic_data_date_of_birth;

    const biographic_data_city_of_birth = new InputTextField({
      id: "biographic_data_city_of_birth",
      labelText: t("City of birth (as listed on passport)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("City of birth (as listed on passport) "),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_city_of_birth"] =
      biographic_data_city_of_birth;

    const biographic_data_country_of_birth = new InputTextField({
      id: "biographic_data_country_of_birth",
      labelText: t("Country of birth"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Country of birth"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_country_of_birth"] =
      biographic_data_country_of_birth;

    const biographic_data_country_of_citizenship = new InputTextField({
      id: "biographic_data_country_of_citizenship",
      labelText: t("Country of citizenship"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Country of citizenship"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_country_of_citizenship"] =
      biographic_data_country_of_citizenship;

    const biographic_data_country_of_legal_permanent_residence =
      new InputTextField({
        id: "biographic_data_country_of_legal_permanent_residence",
        labelText: t("Country of legal permanent residence"),
        helpText: "",
        errorText: t("Field cannot be empty"),
        infoText: "",
        lengthMessage: t("Too much chars"),
        bad_characters_message: t("Only letters allowed"),
        placeHolder: t("Country of legal permanent residence"),
        validate_message: "",
        required: true,
        language: getLanguage(),
        validate_clbk: (field: any) => {
          //this.checkFields();
        },
      });
    this.fields["biographic_data_country_of_legal_permanent_residence"] =
      biographic_data_country_of_legal_permanent_residence;

    const biographic_data_current_occupation = new InputTextAreaField({
      id: "biographic_data_current_occupation",
      labelText: t(
        "Current occupation (if student, please state name of school and major field of study. If employed, list name of employer, address including country, and dates of employment. If you are not currently working, provide the same information for your most recent employer and include dates of employment)"
      ),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t(
        "Current occupation (if student, please state name of school and major field of study. If employed, list name of employer, address including country, and dates of employment. If you are not currently working, provide the same information for your most recent employer and include dates of employment)"
      ),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_current_occupation"] =
      biographic_data_current_occupation;

    const biographic_data_applied_visa_before = new InputRadioField({
      id: "biographic_data_applied_visa_before",
      labelText: t("Have you ever applied for any type of visa before?"),
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
    this.fields["biographic_data_applied_visa_before"] =
      biographic_data_applied_visa_before;

    const biographic_data_type_of_visa_held = new InputTextField({
      id: "biographic_data_type_of_visa_held",
      labelText: t("Type of Visa held"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Type of Visa held"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_type_of_visa_held"] =
      biographic_data_type_of_visa_held;

    const biographic_data_date_of_entry = new InputDateField({
      id: "biographic_data_date_of_entry",
      labelText: t("Date of entry"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: "",
      validate_message: t("Date not valid"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        var date = new Date(field.field.value);
        var actualDate = new Date();
        if (date > actualDate) {
          return t("Must be a past date");
        } else {
          return "";
        }
      },
    });
    this.fields["biographic_data_date_of_entry"] =
      biographic_data_date_of_entry;
    const biographic_data_date_exited_us = new InputDateField({
      id: "biographic_data_date_exited_us",
      labelText: t("Date you exited the US"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: "",
      validate_message: t("Date not valid"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        var date = new Date(field.field.value);
        var actualDate = new Date();
        var entryDate = new Date(
          this.fields["biographic_data_date_of_entry"].getValue()
        );
        if (date > actualDate) {
          return t("Must be a past date");
        } else {
          if (date <= entryDate) {
            return t("Must be before entry date");
          }
          return "";
        }
      },
    });
    this.fields["biographic_data_date_exited_us"] =
      biographic_data_date_exited_us;
    const biographic_data_i94_expiration_date = new InputDateField({
      id: "biographic_data_i94_expiration_date",
      labelText: t("I-94 Form expiration date"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      placeHolder: "",
      validate_message: t("Date not valid"),
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        var date = new Date(field.field.value);
        var actualDate = new Date();
        if (date > actualDate) {
          return t("Must be a past date");
        } else {
          return "";
        }
      },
    });
    this.fields["biographic_data_i94_expiration_date"] =
      biographic_data_i94_expiration_date;

    const biographic_data_purpose_of_visit = new InputTextAreaField({
      id: "biographic_data_purpose_of_visit",
      labelText: t("Purpose of visit"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Purpose of visit"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_purpose_of_visit"] =
      biographic_data_purpose_of_visit;

    const biographic_data_emergency_contact_fullname = new InputTextField({
      id: "biographic_data_emergency_contact_fullname",
      labelText: t("Full Name"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Full Name"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_emergency_contact_fullname"] =
      biographic_data_emergency_contact_fullname;

    const biographic_data_emergency_contact_telephone = new InputTextField({
      id: "biographic_data_emergency_contact_telephone",
      labelText: t("Telephone"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Telephone"),
      validate_message: "",
      required: false,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["biographic_data_emergency_contact_telephone"] =
      biographic_data_emergency_contact_telephone;

    if (this.debug) {
      this.fields["biographic_data_last_name"].setValue("Luis");
      this.fields["biographic_data_first_name"].setValue("Suarez");
      this.fields["biographic_data_gender"].setValue(1);
      this.fields["biographic_data_email"].setValue("piero@gmail.com");
      this.fields["biographic_data_current_telephone"].setValue("42918");
      this.fields["biographic_data_permanent_foreign_address"].setValue(
        "calle rosales"
      );
      this.fields["biographic_data_current_mailing_address"].setValue(
        "calle florales"
      );
      this.fields["biographic_data_passport_number"].setValue("123456789");
      this.fields["biographic_data_passport_expiration_date"].setValue(
        "2025-12-12"
      );
      this.fields["biographic_data_date_of_birth"].setValue("2025-12-12");
      this.fields["biographic_data_city_of_birth"].setValue("Barcelona");
      this.fields["biographic_data_country_of_birth"].setValue("España");
      this.fields["biographic_data_country_of_citizenship"].setValue("España");
      this.fields[
        "biographic_data_country_of_legal_permanent_residence"
      ].setValue("Portugal");
      this.fields["biographic_data_current_occupation"].setValue("Estudiante");
      this.fields["biographic_data_applied_visa_before"].setValue(0);
      this.fields["biographic_data_date_of_entry"].setValue("2025-12-12");
      this.fields["biographic_data_date_exited_us"].setValue("2025-12-12");
      this.fields["biographic_data_i94_expiration_date"].setValue("2025-12-12");
    }
  }
}
