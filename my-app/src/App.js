// import { useState } from "react";

// const Button = ({ text, onClick }) => {
//   return <button onClick={onClick}>{text} counter</button>;
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const increaseCounter = () => {
//     setCounter((prev) => prev + 1);
//   };

//   const decreaseCounter = () => {
//     setCounter((prev) => prev - 1);
//   };

//   return (
//     <div>
//       <h2>Total clicks: {counter}</h2>
//       <Button text="increase" onClick={increaseCounter} />
//       <Button text="decrease" onClick={decreaseCounter} />

//       <button
//         onClick={() => {
//           setCounter((prev) => prev + 1);
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.func}>{props.name}</button>;
};

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h2>Total clicks: {counter}</h2>
      <Button name="increase" func={increaseCounter} />
      <Button name="decrease" func={decreaseCounter} />
    </div>
  );
}

export default App;
