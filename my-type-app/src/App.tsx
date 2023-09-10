import { useState } from "react";
import styled from "styled-components";
import { nameState } from "./atoms";
import { useRecoilState } from "recoil";
import Form from "./Form";

function App() {
  const [name, setName] = useRecoilState(nameState);

  return (
    <>
      <h1>My name is {name}</h1>
      <Form></Form>
    </>
  );
}

export default App;
