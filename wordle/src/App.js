import { styled, createGlobalStyle } from "styled-components";
import Word from "./Word";
import ResultPage from "./ResultPage";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  };
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  };
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  };
  body {
    line-height: 1;
  };
  menu, ol, ul {
    list-style: none;
  };
  blockquote, q {
    quotes: none;
  };
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  };
  table {
    border-collapse: collapse;
    border-spacing: 0;
  };
  *{
    box-sizing:border-box;
  };
  body {
    font-family: 'Montserrat', sans-serif;
  };
  a{
    text-decoration:none;
    color:inherit;
  }
  .green {
    background-color: green;
  }
  .yellow{
    background-color:rgb(201, 201, 61);
  }
  .gray {
    background-color: gray
  }
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 15vh;
  font-size: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

function App() {
  const getWord = async () => {
    const res = await axios("https://random-word-api.herokuapp.com/word?length=5");
    setAnswer(res.data[0]);
  };

  const [answer, setAnswer] = useState("");
  const [res, setRes] = useState(false);
  const [isWin, setIsWin] = useState(true);
  useEffect(() => {
    getWord();
  }, []);

  const checkResult = (result) => {
    setRes(result);
  };

  const checkIsWin = (result) => {
    setIsWin(result);
  };

  const render = () => {
    let words = [];
    for (let i = 0; i < 7; i++) {
      words.push(
        <Word key={i} answer={"reset"} checkResult={checkResult} checkIsWin={checkIsWin}></Word>
      );
    }
    return words;
  };
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        {res ? (
          <ResultPage key={answer} answer={answer} isWin={isWin}></ResultPage>
        ) : (
          <>
            <Title>Wordle</Title>
            {render()}
          </>
        )}
      </Container>
    </>
  );
}

export default App;
