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
  effects: [
    ({ setSelf, onSet }: any) => {
      const savedValue = localStorage.getItem("name");
      if (savedValue !== null) setSelf(JSON.parse(savedValue));
      onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
          ? localStorage.removeItem("name")
          : localStorage.setItem("name", JSON.stringify(newValue));
      });
    },
  ],
});

export const valueState = atom({
  key: "value",
  default: "",
});
