import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../src/SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = import.meta.env.VITE_API_KEY;

let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${apiKey}&units=metric`);
    let jsonResponse = await response.json();

    if (!response.ok || !jsonResponse.main) {
        throw new Error("City not found");
    }

    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
};


    let handleInput = async(event) => {
        setCity(event.target.value);
    }

let handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
    } catch (err) {
        setError(true); 
    }
    setCity(""); 
}

    return(
        <div className='SearchBox'>
        <h3>Search for the weather</h3>

        <form onSubmit={handleSubmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city}
            onChange={handleInput}/>

            <br></br><br></br>

            <Button 
            variant="contained" 
            type='submit'>Search</Button>
            {error && <p>No such city in our API</p>}

        </form>
        
        </div>
    )
}