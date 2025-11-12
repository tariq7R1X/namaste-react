const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import Contact from "../Contact";

// Describe means to group test-cases, and can be multiple test-cases in this
describe("Contact Us Page Test Cases", () => {
  test("Should load contact us page", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should show input box placeholder text", () => {
    render(<Contact />);
    const inputText = screen.getByPlaceholderText("Enter your name");
    expect(inputText).toBeInTheDocument();
  });

  test("Should load three input boxes on Contact Component", () => {
    // Render
    render(<Contact />);
    //   Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
