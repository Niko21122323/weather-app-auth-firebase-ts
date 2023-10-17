import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { WeatherData } from "../pages/Layout";
import MainData from "./MainData";

let data: WeatherData | null;

describe("MainData.tsx", () => {
  it("renders the data", () => {
    const data: WeatherData = {
      main: {
        pressure: 1000,
        temp: 20,
        temp_max: 25,
        temp_min: 15,
        humidity: 200,
        feels_like: 16,
      },
      name: "London",
      weather: [
        {
          description: "overcast clouds",
          main: "clouds",
        },
      ],
      wind: {
        speed: 10,
        deg: 30,
        gust: 11,
      },
      sys: {
        sunrise: 12312312,
        sunset: 389213,
      },
    };

    const { getByTestId } = render(<MainData data={data} />);
    expect(getByTestId("cityName")).toBeInTheDocument();
    expect(getByTestId("desc")).toBeInTheDocument();
    expect(getByTestId("desc")).toBeVisible();
    expect(getByTestId("temp")).toBeInTheDocument();
  });

  it("city name is rendered", () => {
    render(<MainData data={data} />);
    const cityName = screen.getByTestId("cityName");
    expect(cityName).toBeVisible();
  });
});
