interface IA {
  d: string;
  e: string;
}

interface ID {
  h: string;
}

interface IC {
  f: string;
  g: ID;
  i: IB[];
}

interface IB {
  a: boolean;
  b: IA;
  c: IC;
  h: IB[];
}
enum Status {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

type NonObjectPropKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? K : T[K] extends object ? never : K;
}[keyof T];

type NonObjectPropKeys1<T> = {
  [K in keyof T]: T[K] extends any[] ? K : T[K] extends object ? never : K;
};

type ALlKeys<T> = {
  [K in keyof T]: K;
}[keyof T];
type AllProps<T> = {
  [K in keyof T]: T[K];
}[keyof T];

type NonObjectProps<T> = {
  [K in keyof T]: T[K] extends any[]
    ? T[K]
    : T[K] extends object
    ? never
    : T[K];
}[keyof T];

type Keys = ALlKeys<IB>;
type Props = AllProps<IB>;
type B = NonObjectPropKeys<IB>;
type B1 = NonObjectPropKeys1<IB>;
type C = NonObjectProps<IB>;

type NonObjectPicks<T> = Pick<T, NonObjectPropKeys<T>>;

type ObjectPropkeys<T> = Exclude<keyof T, NonObjectPropKeys<T>>;

type ObjectPicks<T> = Pick<T, ObjectPropkeys<T>>;

type Obj<T> = T extends object ? T : never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type FlattenObjectKey<T> = {
  default: T extends object
    ? UnionToIntersection<Obj<T[keyof T]>> extends object
      ? NonObjectPicks<T> &
          FlattenObjectKey<ObjectPicks<T>[keyof ObjectPicks<T>]>
      : T
    : never;
  array: T;
}[T extends any[] ? "array" : T extends object ? "default" : never];

type FlattenObject<T extends object> = NonObjectPicks<T> &
  UnionToIntersection<FlattenObjectKey<ObjectPicks<T>[keyof ObjectPicks<T>]>>;

type A = FlattenObject<IB>;

type Point = { x: number; y: number };
type P = keyof Point;
