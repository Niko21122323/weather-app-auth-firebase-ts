import { ChangeEvent, KeyboardEvent } from "react";
import { WeatherData } from "../pages/Layout";
import axios from "axios";
import "../css/input.scss";

const Input = ({
  setData,
  location,
  setLocation,
}: {
  setData: (data: WeatherData) => void;
  location: string;
  setLocation: (location: string) => void;
}) => {
  const apiKey = "95fc4f99d8a217a6fd2512dbf4cb68cb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.get<WeatherData>(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <input
      className="input"
      data-testid="input"
      value={location}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setLocation(event.target.value)
      }
      onKeyDown={searchLocation}
      placeholder="Search a city..."
      type="text"
    />
  );
};

export default Input;
