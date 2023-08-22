import { styled } from "styled-components";
import Word from "./Word";

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 15vh;
  font-size: 40px;
`;

function App() {
  return (
    <Container>
      <Title>wordle</Title>
      <Word first={true}></Word>
      <Word></Word>
      <Word></Word>
      <Word></Word>
      <Word></Word>
      <Word></Word>
      <Word></Word>
    </Container>
  );
}

export default App;
