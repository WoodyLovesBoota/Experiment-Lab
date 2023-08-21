import { useState, useEffect } from "react";

function App() {
  const key = "a0da403921cabb72edbfc43c1abe7772";

  const [name, setName] = useState("Not woody");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);

  const changeName = () => {
    name === "woody" ? setName("Not woody") : setName("woody");
  };

  const changeAge = () => {
    setAge(age + 1);
  };

  const Btn = ({ title, onClick }) => {
    return <button onClick={onClick}>{title}</button>;
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const successCallback = (location) => {
    getWeather(location);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const getWeather = async (location) => {
    const [latitude, longitude] = [location.coords.latitude, location.coords.longitude];
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    const city = data.name;
    let temp = data.main.temp;
    const weatherCode = data.weather[0].icon;

    if (String(temp).length > 3) temp = String(temp).substring(0, 4);
    setCity(city);
    setTemp(temp);
  };

  useEffect(() => {
    getLocation();
  }, [age]);

  return (
    <div>
      <h1>You Are In {city}</h1>
      <h1>Temperature : {temp}</h1>
      <h1>I am {name}</h1>
      <h2>I am {age} years old</h2>
      <Btn title="chagne name" onClick={changeName}></Btn>
      <Btn title="change age" onClick={changeAge}></Btn>
    </div>
  );
}

export default App;
