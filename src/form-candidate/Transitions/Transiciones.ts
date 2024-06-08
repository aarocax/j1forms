export { Transiciones }

import { Transition } from "../../BaseForm/StateMachine/StateMachine"

const Transiciones: Transition = {
    Tab0: { next: 'Tab1', previous: 'Tab0', conditions: { next: () => true, previous: () => true } },
    Tab1: { next: 'Tab2', previous: 'Tab0', conditions: { next: () => true, previous: () => true } },
    Tab2: { next: 'Tab3', previous: 'Tab1', conditions: { next: () => true, previous: () => true } },
    Tab3: { next: 'Tab4', previous: 'Tab2', conditions: { next: () => true, previous: () => true } },
    Tab4: { next: 'Tab5', previous: 'Tab3', conditions: { next: () => true, previous: () => true } },
    Tab5: { next: 'Tab5', previous: 'Tab4', conditions: { next: () => true, previous: () => true } },
};

