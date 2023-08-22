import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  span {
    color: white;
    font-size: 36px;
  }
`;

const Input = styled.input.attrs({ placeholder: "add your name" })`
  height: 30px;
  margin-left: 50px;
`;

function App() {
  return (
    <Main>
      <Circle as="a" href="#" bgColor={"orange"}></Circle>
      <Circle bgColor={"blue"}>
        <span>BLUE</span>
      </Circle>
    </Main>
  );
}

export default App;
