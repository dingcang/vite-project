export const schedulerTest = () =>
  import("./schedulerTest").then((module) => {
    module.test();
    module.testSingle();
  });

export const subscriberTest = () =>
  import("./subscriberTest").then((module) => {
    console.group();
    module.test();
    console.groupEnd();
  });

export const promiseTest = () =>
  import("./promiseTest").then((module) => {
    console.group();
    module.test();
    console.groupEnd();
  });
