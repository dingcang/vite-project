export type Task = () => Promise<unknown>;

export interface SchedulerInstanceType {
  schedule: () => void;
  add: (task: Task) => void;
}

export class Scheduler implements SchedulerInstanceType {
  #count = 10;
  #tasks: Promise<unknown>[] = [];
  #queue: Task[] = [];
  constructor(count?: number) {
    if (typeof count === "number") this.#count = count;
  }
  schedule() {
    while (this.#tasks.length < this.#count && this.#queue.length > 0) {
      const task = this.#queue.shift();
      const promise = task!().then(() => {
        this.#tasks.splice(this.#tasks.indexOf(promise), 1);
        this.schedule();
      });
      this.#tasks.push(promise);
    }
  }
  add(task: Task) {
    this.#queue.push(task);
    this.schedule();
  }
}
let single: SchedulerInstanceType;

export function singleScheduler(count?: number) {
  return single || (single = new Scheduler(count));
}

export default Scheduler;
