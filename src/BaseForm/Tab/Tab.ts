export { Tab }

abstract class Tab {

  public fields: any = new Array();
  public pass: boolean = false;

  public abstract setHeader(): void;
  public abstract setFields(): void;

  constructor() {
    this.fields = [];
  }

  public validate(): boolean {
    var valid = true;
    Object.entries(this.fields).forEach((e: any, i, a) => {
      if (e[1].validate() === false) {
        valid = false;
      }
    })
    this.pass = valid;
    return valid;
  }

  public getPass(): boolean {
    return this.pass;
  }

}