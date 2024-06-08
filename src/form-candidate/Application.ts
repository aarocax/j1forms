import { StateMachine } from "../BaseForm/StateMachine/StateMachine";
import { Transiciones } from "./Transitions/Transiciones";
import { Control } from "./Control/Control";
import { Tab } from "../BaseForm/Tab/Tab";
import { Tab0 } from "./Tabs/Tab0";
import { Tab1 } from "./Tabs/Tab1";
import { Tab2 } from "./Tabs/Tab2";
import { Tab3 } from "./Tabs/Tab3";
import { Tab4 } from "./Tabs/Tab4";
import { Tab5 } from "./Tabs/Tab5";

class Application {

    private stateMachine: StateMachine;
    private control: Control;
    private debug: boolean = true;
    private tabsFields: Array<Tab> = [];

    constructor() {
        this.stateMachine = new StateMachine('Tab0', Transiciones);
        this.setUpFields();
        this.control = new Control('candidate-form', this.tabsFields, this.stateMachine);
    }

    private setUpFields(): void {
        this.tabsFields.push(new Tab0(this.debug));
        this.tabsFields.push(new Tab1(this.debug));
        this.tabsFields.push(new Tab2(this.debug));
        this.tabsFields.push(new Tab3(this.debug));
        this.tabsFields.push(new Tab4(this.debug));
        this.tabsFields.push(new Tab5(this.debug));
    }

}

const app = new Application();