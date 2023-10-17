import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App.tsx", () => {
  it("renders SignUp on path /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("SignUp")).toBeInTheDocument();
  });

  it("renders SignUp on path /signin", () => {
    render(
      <MemoryRouter initialEntries={["/signin"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("SignIn")).toBeInTheDocument();
  });
});
