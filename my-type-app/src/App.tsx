import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.btnColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username"></input>
        <Button>Log in</Button>
      </form>
    </div>
  );
}

export default App;
