import { atom } from "recoil";

interface IToDoState {
  [key: string]: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
}

export const nameState = atom({
  key: "name",
  default: "",
});
