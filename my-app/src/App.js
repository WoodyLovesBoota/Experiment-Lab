import { useState, useEffect } from "react"

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(()=>{
    console.log("a");
  },[age]);

  return <div></div>;
}

export default App;
