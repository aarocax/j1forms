export { Tab4 };

import { Tab } from "../../BaseForm/Tab/Tab";
import { InputTextField } from "../../BaseForm/Fields/InputTextField";
import { InputSelectField } from "../../BaseForm/Fields/InputSelectField";
import { InputRadioField } from "../../BaseForm/Fields/InputRadioField";
import { InputCheckBoxField } from "../../BaseForm/Fields/InputCheckBoxField";

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
    const dependent_full_name_1 = new InputTextField({
      id: "dependent_full_name_1",
      labelText: t("Full name as it appears on passport"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Full name as it appears on passport"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["dependent_full_name_1"] = dependent_full_name_1;

    const dependent_relationship_1 = new InputTextField({
      id: "dependent_relationship_1",
      labelText: t("Relationship to you (dependent or spouse)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Relationship to you (dependent or spouse)"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["dependent_relationship_1"] = dependent_relationship_1;

    const dependent_date_of_birth_1 = new InputTextField({
      id: "dependent_date_of_birth_1",
      labelText: t("Date of birth (please write the month in words)"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("Date of birth (please write the month in words)"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["dependent_date_of_birth_1"] = dependent_date_of_birth_1;

    const dependent_city_country_1 = new InputTextField({
      id: "dependent_city_country_1",
      labelText: t("City and country of birth"),
      helpText: "",
      errorText: t("Field cannot be empty"),
      infoText: "",
      lengthMessage: t("Too much chars"),
      bad_characters_message: t("Only letters allowed"),
      placeHolder: t("City,  Country"),
      validate_message: "",
      required: true,
      language: getLanguage(),
      validate_clbk: (field: any) => {
        //this.checkFields();
      },
    });
    this.fields["dependent_city_country_1"] = dependent_city_country_1;

    const dependent_citizenship_country_1 = new InputTextField({
      id: "dependent_citizenship_country_1",
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
    this.fields["dependent_citizenship_country_1"] =
      dependent_citizenship_country_1;

    if (this.debug) {
      this.fields["dependent_full_name_1"].setValue("Juan");
      this.fields["dependent_relationship_1"].setValue("Mother");
      this.fields["dependent_date_of_birth_1"].setValue("January 1, 1990");
      this.fields["dependent_city_country_1"].setValue("London, UK");
      this.fields["dependent_citizenship_country_1"].setValue("United Kingdom");
    }
  }
}
