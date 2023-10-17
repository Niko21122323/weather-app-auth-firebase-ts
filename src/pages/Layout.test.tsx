import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout.tsx", () => {
  it("renders mainData and otherData", async () => {
    render(<Layout />);
    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "tokyo" } });
    fireEvent.keyDown(input, { key: "Enter" });

    await waitFor(() => {
      const mainData = screen.getByTestId("mainData");
      const moredata = screen.getByTestId("moreData");

      expect(mainData).toBeInTheDocument();
      expect(moredata).toBeInTheDocument();
    });
  });
});
