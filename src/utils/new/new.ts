export const newConstructor = function (Constructor: Function, ...args: any[]) {
  let obj = null;
  let rest = null;
  let constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== "function") {
    throw new Error("type error");
  }
  obj = Object.create(constructor.prototype);
  rest = constructor(obj, arguments);
  let flag = rest && (typeof rest === "object" || typeof rest === "function");
  return flag ? rest : obj;
};
