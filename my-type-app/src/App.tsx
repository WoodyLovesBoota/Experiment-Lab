import { useState } from "react";
import styled from "styled-components";
import { nameState } from "./atoms";
import { useRecoilState } from "recoil";
import Input from "./Button";

function App() {
  const [name, setName] = useRecoilState(nameState);
  return (
    <form>
      <h1>My name is {name}</h1>
      <Input />
    </form>
  );
}

export default App;
