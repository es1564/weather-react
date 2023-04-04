import React from 'react'

export const WeatherBox = ({weather}) => {
    console.log(weather)
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}</h2>
        <h2>{weather?.main.temp_max}/{weather?.main.temp_min}</h2>
        <h2>{weather?.weather[0].description}</h2>
    </div>
  )
}
