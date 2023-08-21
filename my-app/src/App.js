import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotationAni = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0;
  }
  50% {
    border-radius:50%;

  }
  100%{
    transform:rotate(360deg);
    border-radius:0;

  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAni} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 150px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <Emoji>a</Emoji>
      </Box>
    </Father>
  );
}

export default App;
