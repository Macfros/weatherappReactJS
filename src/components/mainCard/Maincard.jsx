import "./maincard.css";

export const Maincard = (props) => {
  return(
    <div className="maincard">
      <div className="temp">
       <div className="location">{props.city}</div>
       <div className="iconWeather"><img src={props.icon} alt="icon-image"/></div>
       <div className="temperature">{props.temp} °{props.metric}</div>
      </div>

      <div className="desc">
      {props.desc}
      </div>
    </div>
  )
};
