import "./sidecard.css";
import {FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import {BiHappy} from "react-icons/bi";
import {MdCompress, MdOutlineWaterDrop} from "react-icons/md"


export const Sidecard= (props) => {
   const windUnit= props.metric === 'C' ? 'm/s' : 'm/h';
  const cards = [
    {
      id: 1,
      icon: <BiHappy />,
      title: "Feels like",
      data: props.feels_like,
      unit: props.metric,
    },
    {
      id: 2,
      icon: <FaArrowDown />,
      title: "Min Temp",
      data: props.tempmin,
      unit: props.metric,
    },
    {
      id: 3,
      icon: <FaArrowUp />,
      title: "Max Temp",
      data: props.tempmax,
      unit: props.metric,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "Pressure",
      data: props.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: props.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "Wind Speed",
      data: props.speed,
      unit: windUnit,
    },
  ];

  return (
    <div className="mainside">
     <div className="column">

        {cards.map(({id, icon, title, data, unit})=> (
          <div key={id} className="card">
            <div className="desc__card_icon">
               {icon}
               <small> {title} </small>
            </div>
              <h2>{`${data} ${unit}`}</h2>
          </div>
        ))}
    </div>
   </div>
  );
}
