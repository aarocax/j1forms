export { StateMachine, Transition };

type Transition = {
  [state: string]: { next: string; previous: string; conditions?: { next?: () => boolean; previous?: () => boolean } };
};

class StateMachine {
  private state: string;
  private transitions: Transition;

  constructor(initialSate: string, transitions: Transition) {
    this.state = initialSate;
    this.transitions = transitions;
  }

  public getState(): string {
    return this.state;
  }

  public transition(direccion: 'next' | 'previous'): void {
    const transition = this.transitions[this.state];
    if (transition) {
      const nextState = transition[direccion];
      const conditions = transition.conditions;
      if (nextState) {
        if (!conditions || (conditions[direccion] && conditions[direccion]!())) {
          this.state = nextState;
        }
      }
    }
  }
}



