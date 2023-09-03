import { styled } from "styled-components";

const LetterInput = styled.input.attrs({
  maxLength: 1,
  required: true,
  autoFocus: (props) => props.foc,
})`
  width: 6vw;
  height: 6vw;
  border-radius: 1vw;
  margin: 0.4vw 0.2vw;
  background-color: ${(props) => props.bgcolor};
  border: none;
  text-align: center;
  vertical-align: center;
  font-size: 5vw;
  color: white;
  text-transform: uppercase;
  transition: background-color 1s ease-in-out;
  caret-color: transparent;

  &:focus {
    outline: none;
  }
`;

const moveCursor = (e) => {
  if (e.keyCode === 8) {
    e.target.previousSibling?.focus();
  } else if (e.target.value.length === 1) {
    e.target.nextSibling?.focus();
  }
};

const Letter = ({ focus, bgcolor }) => {
  console.log(focus);
  return <LetterInput onKeyUp={moveCursor} bgcolor={bgcolor} foc={focus}></LetterInput>;
};

export default Letter;
