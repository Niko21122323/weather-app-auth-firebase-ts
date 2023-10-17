import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { WeatherData } from "../pages/Layout";
import OtherData from "./OtherData";

let data: WeatherData | null;

describe("OtherData.tsx", () => {
  it("renders max temp", () => {
    const { getByText } = render(<OtherData data={data} />);
    const maxTemp = getByText(/max temp/i);
    expect(maxTemp).toBeVisible();
  });

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

    const { getByText } = render(<OtherData data={data} />);
    expect(getByText("25 C")).toBeInTheDocument();
  });
});
