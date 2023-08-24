import { styled, createGlobalStyle } from "styled-components";
import Word from "./Word";
import ResultPage from "./ResultPage";
import { useState } from "react";

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
  font-size: 40px;
`;

function App() {
  let answer = "reset";

  const [res, setRes] = useState(false);
  const checkResult = (result) => {
    setRes(result);
  };

  const render = () => {
    let words = [];
    for (let i = 0; i < 7; i++) {
      words.push(<Word answer={answer} checkResult={checkResult}></Word>);
    }
    return words;
  };
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        {res ? (
          <ResultPage answer={answer}></ResultPage>
        ) : (
          <>
            <Title>wordle</Title>
            {render()};
          </>
        )}
      </Container>
    </>
  );
}

export default App;
