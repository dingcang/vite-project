enum Status {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

export class MyPromise {
  status: Status;
  value: any;
  reason: any;
  fulFilledCb: Function = () => undefined;
  rejectedCb: Function = () => undefined;
  constructor(executor: Function) {
    this.status = Status.PENDING;

    let resolve = (value: any) => {
      queueMicrotask(() => {
        if (this.status === Status.PENDING) {
          this.status = Status.FULFILLED;
          this.value = value;
          this.fulFilledCb(value);
        }
      });
    };
    let reject = (reason: any) => {
      queueMicrotask(() => {
        if (this.status === Status.PENDING) {
          this.status = Status.REJECTED;
          this.reason = reason;
          this.rejectedCb(reason);
        }
      });
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(
    onFulfilled: Function = (v: any) => v,
    onRejected: Function = (v: any) => v
  ) {
    if (this.status === Status.FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === Status.REJECTED) {
      onRejected(this.reason);
    }
    if (this.status === Status.PENDING) {
      this.fulFilledCb = onFulfilled;
      this.rejectedCb = onRejected;
    }
    // return new MyPromise((resolve, reject) => {

    // })
  }
}
