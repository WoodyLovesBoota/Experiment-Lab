import { styled, keyframes } from "styled-components";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  background-color: rgba(0, 0, 0);
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  h1 {
    font-size: 5vw;
    margin-bottom: 3vw;
  }
  div {
    display: flex;
    span {
      font-size: 7.5vw;
      width: 7vw;
      height: 7vw;
      font-weight: 700;
      margin-right: 1vw;
      background-color: #539165;
      text-align: center;
      vertical-align: center;
    }
  }
`;

const rotationAni = keyframes`
  0% {transform: rotate(0deg)};
  100% {transform: rotate(360deg)};
`;

const Button = styled.button`
  margin-top: 4vw;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  font-size: 2.5vw;
  span {
    display: block;
    font-size: 5vw;
    &:hover {
      animation: ${rotationAni} 2s linear infinite;
    }
  }
`;

const refreshPage = () => {
  window.location.reload(false);
};

const ResultPage = ({ answer, isWin }) => {
  return (
    <Container>
      <h1>{isWin ? "GOOD !!!!" : "So close..."}</h1>
      <h1>The answer is...</h1>
      <div>
        <span>{answer[0].toUpperCase()}</span>
        <span>{answer[1].toUpperCase()}</span>
        <span>{answer[2].toUpperCase()}</span>
        <span>{answer[3].toUpperCase()}</span>
        <span>{answer[4].toUpperCase()}</span>
      </div>
      <Button onClick={refreshPage}>
        <span>
          <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
        </span>
        <p>Restart</p>
      </Button>
    </Container>
  );
};

export default ResultPage;
