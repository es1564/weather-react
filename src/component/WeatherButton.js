import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export const WeatherButton = ({cities, setCity, city}) => {

  return (
    <div>
        <Button variant={`${city == "" ? "warning" : "primary"}`}  onClick={()=>setCity("")}>Current Location</Button>

        {cities.map((item)=>(
            <Button variant={`${city == item ? "warning" : "primary"}`} onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}
