export { Field };

import { FieldInterface } from "../Inteface/FieldInterface";
import { FieldParamsInterface } from "../Inteface/FieldParamsInterface";

abstract class Field implements FieldInterface {
  public id: string;
  public wrapper: HTMLElement;
  public label: HTMLElement;
  public help: HTMLElement;
  public error: HTMLElement;
  public info: HTMLElement;

  public required: boolean;
  public pass: boolean;

  public abstract getValue(): string | string[];
  public abstract setValue(value: string | number): void;
  public abstract validate(): boolean;

  constructor(params: FieldParamsInterface) {
    this.id = params.id;
    this.wrapper = document.querySelector(
      '[data-wrapper="' + params.id + '"]'
    ) as HTMLElement;
    this.label = this.wrapper.querySelector('[data-id="label"]') as HTMLElement;
    this.help = this.wrapper.querySelector(
      '[data-wrapper="help-message"]'
    ) as HTMLElement;
    this.error = this.wrapper.querySelector(
      '[data-wrapper="error-message"]'
    ) as HTMLElement;
    this.info = this.wrapper.querySelector(
      '[data-wrapper="info-message"]'
    ) as HTMLElement;
    this.required = params.required ? true : false;
    this.pass = false;
    this.showField(true);
    this.setTooltip(params);
    this.setHelpMessage(params.helpText);
    this.setInfoMessage(params.infoText);
    this.setErrorMessage(params.errorText);
  }

  public setLabel(text: string): void {
    this.label.innerHTML = text;
  }

  public setTooltip(params: any) {
    var labelText = params.labelText;
    if (params.infoText) {
      var tooltipContent =
        '<div class="tooltip-content" style="display:none">' +
        params.infoText +
        "</div>";
      labelText +=
        '<img src="/src/assets/icons/info_tooltip.svg" alt="icono de tooltip" class="tooltip-icon" ></img>' +
        tooltipContent;
    }
    this.setLabel(labelText);
    if (params.infoText) {
      var tooltipIconEl = this.wrapper.querySelector(
        '[class="tooltip-icon"]'
      ) as HTMLElement;
      var tooltipContentEl = this.wrapper.querySelector(
        '[class="tooltip-content"]'
      ) as HTMLElement;
      document.body.addEventListener("click", (e: MouseEvent) => {
        if (!this.wrapper.contains(e.target as Node)) {
          tooltipContentEl.style.display = "none";
        }
      });
      tooltipIconEl.onclick = function () {
        tooltipContentEl.style.display =
          tooltipContentEl.style.display === "none" ? "block" : "none";
      };
    }
  }

  public showField(show: boolean): void {
    this.wrapper.style.display = show === true ? "block" : "none";
  }

  public setValid(valid: boolean): void {
    this.pass = valid;
  }

  public isValid(): boolean {
    return this.pass;
  }

  public setHelpMessage(message: string | null): void {
    if (message !== null) {
      const element = this.help.querySelector(
        '[data-message="help-message-text"]'
      ) as HTMLElement;
      element.innerHTML = message;
    }
  }

  public showHelpMessage(): void {
    this.help.style.display = "block";
  }

  public hideHelpMessage(): void {
    this.help.style.display = "none";
  }

  public setInfoMessage(message: string | null): void {
    if (message !== null) {
      const element = this.info.querySelector(
        '[data-message="info-message-text"]'
      ) as HTMLElement;
      element.innerHTML = message;
    }
  }

  public showInfoMessage(): void {
    this.info.style.display = "block";
  }

  public hideInfoMessage(): void {
    this.info.style.display = "none";
  }

  public setErrorMessage(message: string | null): void {
    if (message !== null) {
      const element = this.error.querySelector(
        '[data-message="error-message-text"]'
      ) as HTMLElement;
      element.innerHTML = message;
    }
  }

  public showErrorMessage(): void {
    this.error.style.display = "flex";
  }

  public hideErrorMessage(): void {
    this.error.style.display = "none";
  }

  public fail(message: string | null = null): boolean {
    this.setErrorMessage(message);
    this.showErrorMessage();
    return false;
  }

  public success(): boolean {
    this.hideErrorMessage();
    return true;
  }
}
