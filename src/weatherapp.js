const APIKEY= "4a38fb6d7084570dd1bd4d0cd0d75f09";

const makeIconURL= (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getData= async (city,units='metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

  const data= await fetch(URL).then((res)=> res.json()).then((data)=>data);

  const{weather, main: {temp, feels_like, temp_min, temp_max, pressure, humidity}, wind: {speed}, sys: {country}, name}=data;

   const  {description, icon}= weather[0];
  return {
    description, iconURL:makeIconURL(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name,
  };
}

export {getData};
