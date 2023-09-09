import { nameState } from "./atoms";
import { useRecoilState } from "recoil";

const Input = () => {
  const [name, setName] = useRecoilState(nameState);
  return (
    <input
      onChange={(e) => {
        setName(e.currentTarget.value);
      }}
    ></input>
  );
};

export default Input;
