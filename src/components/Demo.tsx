import { useState } from "react";
import { WeatherData } from "../pages/Layout";
import Input from "./Input";
import MainData from "./MainData";
import OtherData from "./OtherData";
import "../css/demo.scss";

const Demo = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

  return (
    <article className="demo">
      <div className="demoContainer">
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
        {data?.main !== undefined && <MainData data={data} />}
        {data?.main !== undefined && <OtherData data={data} />}
      </div>
    </article>
  );
};
export default Demo;
