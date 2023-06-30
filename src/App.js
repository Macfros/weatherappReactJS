import { useState,useEffect } from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {Maincard} from "./components/mainCard/Maincard";
import {Sidecard} from "./components/sidecard/Sidecard";
import {getData} from "./weatherapp.js";
import hotclouds from "./assets/hotclouds.mp4";
import cold from "./assets/cold.mp4";

function App() {

  const [city, setcity]=useState('Bangalore');
  const [units, setunits]= useState("metric");
  const [metric, setmetric]=useState("C");
  const [info, setinfo] = useState([]);
  const [bg, setbg]=useState();

  useEffect(() => {
    const fetchData = async () =>{
    const data= await getData(city,units)
    // console.log(data);
    setinfo(data);

    const threshold= units === 'metric' ? 20 : 70;
    if(data.temp<=threshold) setbg(cold)
    else setbg(hotclouds)
  };

  fetchData();
}, [city, units])

    const handlechange= (req) => {
    const button=req.currentTarget;
    const currentUnit= button.innerText.slice(1);

    const isCelcius= currentUnit === 'C';
    button.innerText = isCelcius ? `°F` : '°C';
    setunits(isCelcius ? "metric" : "imperial");
    setmetric(isCelcius? "C" : "F");
    }



  const keyPressed = (req) => {
    if(req.keyCode===13)
    {
      setcity(req.currentTarget.value);
      // console.log(req.currentTarget.value);
    }
  }

  return (
    <div className="app">
        <Navbar />

        <div className="mainapp">
            <div className="inputsection">
               <input type="text" name="cityname"  placeholder="Enter city name and press Enter.." onKeyDown={keyPressed}/>
               <button type="submit" onClick={(req)=> handlechange(req)}>°F</button>
            </div>
        </div>

       {<div className="mainContent">
            <Maincard
                 city={city}
                 desc={info.description}
                 icon={info.iconURL}
                 temp={info.temp}
                 metric={metric}
                 />
            <Sidecard
               metric={metric}
               feels_like={info.feels_like}
               tempmin={info.temp_min}
               tempmax={info.temp_max}
               speed={info.speed}
               pressure={info.pressure}
               humidity={info.humidity}
            />
       </div>}

       <video  src={bg} loop autoPlay muted/>
    </div>
  );
}

export default App;
