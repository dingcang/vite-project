import Subscriber from "@/utils/algorithm/subscriber";

const subscriber = new Subscriber();

export const test = () => {
  subscriber.on("click", function (params: unknown) {
    console.log(params);
  });
  subscriber.emit("click", "before off emit");
  subscriber.off();
  subscriber.emit("click", "after off emit");
};
