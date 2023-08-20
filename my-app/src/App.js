import { useState, useEffect } from "react";

const key = "a0da403921cabb72edbfc43c1abe7772";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

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
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;

    if (String(temp).length > 3) temp = String(temp).substring(0, 4);
    console.log(city, temp);
  };

  useEffect(() => {
    getLocation();
  }, [age]);

  return <div></div>;
}

export default App;
