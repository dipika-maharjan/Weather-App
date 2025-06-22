import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1622336707998-fa47a2594145?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL="https://plus.unsplash.com/premium_photo-1668792545377-49e3dc0257f0?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UkFJTiUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"

    return(
        <div className="InfoBox">
        <h3>Weather Info - {info.description}</h3>

        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp < 15 ? COLD_URL : HOT_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp < 15 ? <AcUnitIcon/> : <WbSunnyIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Min Temperature = {info.tempMin}&deg;C</p>
                <p>Max Temperature = {info.tempMax}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>The weather can be described as <i>{info.description}</i> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>


        </div>
    )
}