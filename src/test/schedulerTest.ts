import { Scheduler, singleScheduler } from "@/utils/algorithm/scheduler";

const scheduler = new Scheduler(3);
const scheduler1 = new Scheduler(4);

function taskFactory(time: number) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(time);
        console.log("resolve time: ", time);
      }, time);
    });
}

export const test = () =>
  Array.apply(null, { length: 10 } as Array<undefined>).map(() => {
    scheduler.add(taskFactory(300));
    scheduler1.add(taskFactory(400));
  });

const singleSchedulerInstance = singleScheduler(5);
const singleSchedulerInstance1 = singleScheduler(6);

console.log(
  "singleSchedulerInstance === singleSchedulerInstance1: ",
  singleSchedulerInstance === singleSchedulerInstance1
);

export const testSingle = () =>
  Array.apply(null, { length: 10 } as Array<undefined>).map(() => {
    singleSchedulerInstance.add(taskFactory(300));
    singleSchedulerInstance1.add(taskFactory(400));
  });
