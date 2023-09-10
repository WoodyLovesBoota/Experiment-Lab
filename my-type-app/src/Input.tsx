import { valueState } from "./atoms";
import { useRecoilState } from "recoil";

const Input = () => {
  const [value, setValue] = useRecoilState(valueState);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  return <input value={value} type="text" onChange={onChange}></input>;
};

export default Input;
