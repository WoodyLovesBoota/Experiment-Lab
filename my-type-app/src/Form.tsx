import { nameState, valueState } from "./atoms";
import { useRecoilState } from "recoil";
import Input from "./Input";

const Form = () => {
  const [name, setName] = useRecoilState(nameState);
  const [value, setValue] = useRecoilState(valueState);

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setName(value);
      }}
    >
      <Input></Input>
    </form>
  );
};

export default Form;
