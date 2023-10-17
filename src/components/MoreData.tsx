import { WeatherData } from "../pages/Layout";
import "../css/moreData.scss";

const MoreData = ({ data }: { data: WeatherData | null }) => {
  return (
    <article className="moreData" data-testid="moreData">
      <div>
        {data?.main ? <p>{data?.main.temp_max} C</p> : null}
        <p>Max temp</p>
      </div>
      <div>
        {data?.main ? <p>{data?.main.temp_min} C</p> : null}
        <p>Min temp</p>
      </div>
      <div>
        {data?.main ? <p>{data?.main.pressure}%</p> : null}
        <p>Pressure</p>
      </div>
      <div>
        {data?.wind ? <p>{data?.wind.speed} kph</p> : null}
        <p>Wind Speed</p>
      </div>
      <div>
        {data?.main ? <p>{data?.main.humidity} </p> : null}
        <p>Humidity</p>
      </div>
      <div>
        {data?.main ? <p>{data?.main.feels_like} </p> : null}
        <p>Feels Like</p>
      </div>
      <div>
        {data?.wind ? <p>{data?.wind.deg} </p> : null}
        <p>Wind Deg</p>
      </div>
      <div>
        {data?.weather ? <p>{data?.weather[0].main} </p> : null}
        <p>Sky</p>
      </div>
      <div>
        {data?.sys ? <p>{data?.sys.sunrise} </p> : null}
        <p>Sunrise</p>
      </div>
      <div>
        {data?.sys ? <p>{data?.sys.sunset} </p> : null}
        <p>Sunset</p>
      </div>
    </article>
  );
};
export default MoreData;
