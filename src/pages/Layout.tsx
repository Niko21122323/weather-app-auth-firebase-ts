import { useState } from "react";
import Input from "../components/Input";
import MainData from "../components/MainData";
import MoreData from "../components/MoreData";
import "../css/layout.scss";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
  sys: {
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

const Layout = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

  return (
    <main className="layout" data-testid="Layout">
      <section className="layoutContainer">
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
        {data?.name !== undefined && <MainData data={data} />}
        {data?.name !== undefined && <MoreData data={data} />}
      </section>
    </main>
  );
};
export default Layout;
