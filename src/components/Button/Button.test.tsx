import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

const setUp = (disabled = false) => {
  const onClick = jest.fn();

  render(<Button title="title" onClick={onClick} disabled={disabled} />);
  const button = screen.getByText("title");

  return {
    button,
    onClick,
  };
};

test("button title matched", () => {
  setUp();
  expect(screen.getByText("title")).toBeInTheDocument();
});

test("On Click Button", () => {
  const { button, onClick } = setUp();

  fireEvent.click(button);
  expect(onClick).toBeCalledTimes(1);
});

test("On Click Disabled Button", () => {
  const { button, onClick } = setUp(true);

  fireEvent.click(button);
  expect(onClick).toBeCalledTimes(0);
});
