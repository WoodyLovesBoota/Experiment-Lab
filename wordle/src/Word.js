import { styled } from "styled-components";
import Letter from "./Letter";
import { useState, useEffect } from "react";

const WordForm = styled.form``;

const SubmitButton = styled.button.attrs({ type: "submit" })`
  display: none;
  width: 0;
  height: 0;
`;

const Word = ({ answer, checkResult }) => {
  const [colors, setColors] = useState(["", "", "", "", ""]);
  const [success, setSuccess] = useState(false);
  let checkArr = new Array(5).fill("");
  const onSubmit = (e) => {
    checkWord(e);
    moveCursor(e);
  };

  const moveCursor = (e) => {
    e.target.nextElementSibling.firstElementChild.focus();
  };

  const checkWord = (e) => {
    let res = [];
    let green = 0;
    e.preventDefault();
    for (let i = 0; i < 5; i++) {
      res.push(e.target[i].value);
      if (res[i] === answer[i]) {
        green++;
        checkArr[i] = "G";
      } else if (answer.includes(res[i])) {
        checkArr[i] = "Y";
      } else {
        checkArr[i] = "B";
      }
    }
    setColors(checkArr);
    if (green === 5) setSuccess(true);
  };

  useEffect(() => {
    checkResult(success);
  }, [success]);

  const render = () => {
    let letters = [];

    colors.forEach((element) => {
      if (element === "G") letters.push(<Letter className={"green"}></Letter>);
      else if (element === "Y") letters.push(<Letter className={"yellow"}></Letter>);
      else letters.push(<Letter className={"gray"}></Letter>);
    });
    return letters;
  };

  return (
    <>
      <WordForm onSubmit={onSubmit}>
        {render()}
        <SubmitButton></SubmitButton>
      </WordForm>
    </>
  );
};

export default Word;
