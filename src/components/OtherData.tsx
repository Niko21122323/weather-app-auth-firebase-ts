import { WeatherData } from "../pages/Layout";
import "../css/otherData.scss";

const OtherData = ({ data }: { data: WeatherData | null }) => {
  return (
    <article className="otherData" data-testid="otherData">
      <div className="dataContainer">
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
      </div>

      <p>Sign Up for weather more details!</p>
    </article>
  );
};
export default OtherData;
