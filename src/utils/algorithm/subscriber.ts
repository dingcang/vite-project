interface EventRegistry {
  [event: string]: Function[] | undefined;
}

export class Subscriber {
  #event: EventRegistry = Object.create(null);

  on(event: string[] | string, fn: Function) {
    if (Array.isArray(event)) {
      event.forEach((e) => this.on(e, fn));
    } else {
      const events = this.#event;
      (events[event] || (events[event] = [])).push(fn);
    }
  }

  emit(event: string, ...args: unknown[]) {
    const cbs = this.#event[event];
    if (cbs) {
      cbs.forEach((cb) => cb(args));
    }
  }

  off(event?: string[] | string, fn?: Function) {
    if (!event) {
      this.#event = Object.create(null);
      return;
    }
    if (Array.isArray(event)) {
      event.forEach((e) => this.off(e, fn));
      return;
    }
    const events = this.#event;
    if (!events[event]) {
      return;
    }
    if (!fn) {
      events[event] = undefined;
    }
    events[event] = events[event]?.filter((i) => i !== fn);
  }
}

export default Subscriber;
