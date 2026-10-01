export type Stage =
  | "start"
  | "rooms"
  | "budget"
  | "owned"
  | "priority"
  | "matching"
  | "results"
  | "plan-loading"
  | "checkout";

export type Priority = "High" | "Mid" | "Low";

export type Room = {
  id: number;
  name: string;
  width: number;
  length: number;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  width: number;
  depth: number;
  priority: Priority;
  source: string;
};
