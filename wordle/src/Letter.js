import { styled } from "styled-components";

const LetterInput = styled.input.attrs({ maxLength: 1, required: true })`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  margin: 2px;
  background-color: #dcdde1;
  border: none;
  text-align: center;
  vertical-align: center;
  font-size: 50px;
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

const Letter = ({ className }) => {
  return <LetterInput onKeyUp={moveCursor} className={className}></LetterInput>;
};

export default Letter;
