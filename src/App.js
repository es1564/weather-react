import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { WeatherBox } from './component/WeatherBox';
import { WeatherButton } from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather,setWeather] = useState(null);
  const [city, setCity]=useState('')
  const cities = ["paris", "new york", "tokyo", "seoul"];
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async (lat,lon)=>{
    setLoading(true)
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=18994412ac6f36628b17150c6ea300b6&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false)
  }

  const getWeatherByCity=async ()=>{
    setLoading(true)
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18994412ac6f36628b17150c6ea300b6&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false)
  }
  useEffect(()=>{
    if(city=="")
      getCurrentLocation()
    else
      getWeatherByCity()
  },[city])

  return (
    <div>
      {loading ? (
          <div className='container'>
            <ClipLoader
              color={color}
              loading={loading}
              // cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ):(
          <div className='container'>
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} setCity={setCity} city={city}/>
          </div>
          )
      }
    </div>
  );
}

export default App;
