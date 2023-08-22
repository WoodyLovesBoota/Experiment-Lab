import { styled } from "styled-components";

const WordForm = styled.form``;

const Letter = styled.input`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  margin: 2px;
  background-color: #dcdde1;
  border: none;
  &:focus {
  }
`;

const Word = ({ first }) => {
  return (
    <WordForm>
      <Letter autoFocus={first}></Letter>
      <Letter></Letter>
      <Letter></Letter>
      <Letter></Letter>
      <Letter></Letter>
    </WordForm>
  );
};

export default Word;
