import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kathmandu",
        temp: 25.39,
        tempMin: 25.39,
        tempMax: 25.39,
        humidity: 78,
        feelsLike: 26.02,
        description: "overcast clouds",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}