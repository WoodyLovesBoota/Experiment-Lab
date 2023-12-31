import { styled } from "styled-components";
import Letter from "./Letter";
import { useState, useEffect } from "react";

const SubmitButton = styled.button.attrs({ type: "submit" })`
  display: none;
`;

const Word = ({ num, answer, checkResult, checkIsWin }) => {
  const [colors, setColors] = useState(["", "", "", "", ""]);
  const [success, setSuccess] = useState(false);
  let checkArr = new Array(5).fill("");
  const onSubmit = (e) => {
    checkWord(e);
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

    if (e.target.nextElementSibling === null) {
      if (green !== 5) checkIsWin(false);
      checkResult(true);
    } else e.target.nextElementSibling.firstElementChild.focus();
  };

  useEffect(() => {
    checkResult(success);
    checkIsWin(true);
  }, [success]);

  const render = () => {
    let letters = [];

    colors.forEach((element, index) => {
      if (element === "G") letters.push(<Letter key={index} bgcolor="#539165" />);
      else if (element === "Y") letters.push(<Letter key={index} bgcolor="#F7C04A" />);
      else if (element === "B") letters.push(<Letter key={index} bgcolor="gray" />);
      else
        letters.push(
          <Letter key={index} bgcolor="#dcdde1" focus={num === 0 && index === 0}></Letter>
        );
    });
    return letters;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {render()}
        <SubmitButton></SubmitButton>
      </form>
    </>
  );
};

export default Word;
