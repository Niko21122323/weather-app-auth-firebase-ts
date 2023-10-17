import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Demo from "../components/Demo";

describe("Demo.tsx", () => {
  it("renders mainData and otherData", async () => {
    render(<Demo />);
    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "tokyo" } });
    fireEvent.keyDown(input, { key: "Enter" });

    await waitFor(() => {
      const mainData = screen.getByTestId("mainData");
      const otherData = screen.getByTestId("otherData");

      expect(mainData).toBeInTheDocument();
      expect(otherData).toBeInTheDocument();
    });
  });
});
