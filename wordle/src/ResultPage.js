import { styled } from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0);
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 48px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 64px;
    margin-bottom: 20px;
    color: green;
    font-weight: 600;
  }
`;

const Button = styled.button`
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 24px;
`;

const refreshPage = () => {
  window.location.reload(false);
};

const ResultPage = ({ answer, isWin }) => {
  return (
    <Container>
      <h1>{isWin ? "GOOD !!!!" : "So close..."}</h1>
      <h1>The answer is...</h1>
      <h2>{answer.toUpperCase()}</h2>
      <Button onClick={refreshPage}>Restart</Button>
    </Container>
  );
};

export default ResultPage;
