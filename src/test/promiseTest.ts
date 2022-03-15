import { MyPromise } from "@/utils/promise/promise";

export const test = () => {
  new MyPromise((resolve: Function, reject: Function) => {
    console.log("promise execute start");
    setTimeout(() => {
      resolve(100);
      console.log("promise resolved");
    }, 2000);
    console.log("promise execute end");
  }).then(
    (res: any) => {
      console.log("promise then resolve: ", res);
    },
    () => {}
  );

  new Promise((resolve: Function, reject: Function) => {
    console.log("promise execute start");
    setTimeout(() => {
      resolve(100);
      console.log("promise resolved");
    }, 2000);
    console.log("promise execute end");
  }).then(
    (res: any) => {
      console.log("promise then resolve: ", res);
    },
    () => {}
  );
};
