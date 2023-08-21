import styled from "styled-components";
import { useState } from "react";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

const Circle = ({ bgColor }: CircleProps) => {
  const [counter, setCounter] = useState(0);
  setCounter(2);
  return <Container bgColor={bgColor}>{counter}</Container>;
};

export default Circle;
