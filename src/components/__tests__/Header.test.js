import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../redux/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// we can write either "test" or "it", both are the same things

it("Should render Header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header with 0 Cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("🛒 - (0 Items)");
  expect(cartItem).toBeInTheDocument();
});

it("Should change Login button to Logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button");
  expect(logoutButton).toBeInTheDocument();
});