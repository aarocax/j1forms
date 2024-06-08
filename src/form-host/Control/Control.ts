import { StateMachine } from "../../BaseForm/StateMachine/StateMachine";
import { HttpClient } from "../../BaseForm/HttpClient/FetchRest";

export { Control };

class Control {
  private form: HTMLFormElement;
  private nextButton: HTMLButtonElement;
  private backButton: HTMLButtonElement;
  private submitButton: HTMLButtonElement;
  private stateMachine: StateMachine;
  private tabs: NodeListOf<HTMLElement> =
    document.querySelectorAll('[data-type="tab"]'); // Array con las tabs del fomulario
  private tabsFields: Array<any>; // Array con los objetos Tab

  constructor(
    formId: string,
    tabsFields: Array<any>,
    stateMachine: StateMachine
  ) {
    this.form = document.querySelector("#" + formId) as HTMLFormElement;
    this.nextButton = this.form.querySelector(
      '[data-id="next-button"]'
    ) as HTMLButtonElement;
    this.backButton = this.form.querySelector(
      '[data-id="back-button"]'
    ) as HTMLButtonElement;
    this.submitButton = this.form.querySelector(
      '[data-id="submit-button"]'
    ) as HTMLButtonElement;
    this.stateMachine = stateMachine;
    this.tabsFields = tabsFields;
    this.setEventListeners();

    if (this.stateMachine.getState() === "Tab0") {
      this.tabs[0].style.display = "block";
      this.nextButton.style.display = "block";
    }
  }

  private setEventListeners() {
    this.nextButton.addEventListener("click", (e) => {
      e.preventDefault();

      const index = this.tabsFields.findIndex(
        (tab) => tab.constructor.name === this.stateMachine.getState()
      );

      if (this.tabsFields[index].validate()) {
        this.stateMachine.transition("next");
      }

      if (this.stateMachine.getState() === "Tab1") {
        this.tabs[0].style.display = "none";
        this.tabs[1].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab2") {
        this.tabs[1].style.display = "none";
        this.tabs[2].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab3") {
        this.tabs[2].style.display = "none";
        this.tabs[3].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab4") {
        this.tabs[3].style.display = "none";
        this.tabs[4].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab5") {
        this.tabs[4].style.display = "none";
        this.tabs[5].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab6") {
        this.tabs[5].style.display = "none";
        this.tabs[6].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab7") {
        this.tabs[6].style.display = "none";
        this.tabs[7].style.display = "block";
      }

      this.showButtons();
    });

    this.backButton.addEventListener("click", (e) => {
      e.preventDefault();

      this.stateMachine.transition("previous");

      if (this.stateMachine.getState() === "Tab6") {
        this.tabs[7].style.display = "none";
        this.tabs[6].style.display = "block";
      }
      if (this.stateMachine.getState() === "Tab5") {
        this.tabs[6].style.display = "none";
        this.tabs[5].style.display = "block";
      }
      if (this.stateMachine.getState() === "Tab4") {
        this.tabs[5].style.display = "none";
        this.tabs[4].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab3") {
        this.tabs[4].style.display = "none";
        this.tabs[3].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab2") {
        this.tabs[3].style.display = "none";
        this.tabs[2].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab1") {
        this.tabs[2].style.display = "none";
        this.tabs[1].style.display = "block";
      }

      if (this.stateMachine.getState() === "Tab0") {
        this.tabs[1].style.display = "none";
        this.tabs[0].style.display = "block";
      }

      this.showButtons();
    });

    this.submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(this.form);
      HttpClient.fetchRest(
        "https://jsonplaceholder.typicode.com/posts",
        "POST",
        "text/html",
        "action_uno",
        "data"
      ).then((response) => {
        console.log(response);
      });
    });
  }

  private showButtons(): void {
    if (this.stateMachine.getState() === "Tab0") {
      this.nextButton.style.display = "block";
      this.backButton.style.display = "none";
      this.submitButton.style.display = "none";
      return;
    }

    if (this.stateMachine.getState() === "Tab7") {
      this.nextButton.style.display = "none";
      this.backButton.style.display = "block";
      this.submitButton.style.display = "block";
      return;
    }

    this.nextButton.style.display = "block";
    this.backButton.style.display = "block";
    this.submitButton.style.display = "none";

    return;
  }
}
