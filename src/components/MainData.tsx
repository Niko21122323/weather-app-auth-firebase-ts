import { WeatherData } from "../pages/Layout";
import "../css/mainData.scss";

const MainData = ({ data }: { data: WeatherData | null }) => {
  return (
    <article className="mainData" data-testid="mainData">
      <p data-testid="cityName">{data?.name}</p>
      {data?.weather ? (
        <p data-testid="desc">{data?.weather[0].description}</p>
      ) : null}
      {data?.main ? (
        <h1 data-testid="temp">{data?.main.temp.toFixed(0)} °C</h1>
      ) : null}
    </article>
  );
};
export default MainData;
