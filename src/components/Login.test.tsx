import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./Login";

const setup = () => {
  render(<Login />);
  const emailInput = screen.getByLabelText("email-input");
  const passwordInput = screen.getByLabelText("password-input");
  const submitButton = screen.getByText("로그인");

  return {
    emailInput,
    passwordInput,
    submitButton,
  };
};

test("render label", () => {
  setup();
  expect(screen.getByText("이메일")).toBeInTheDocument();
  expect(screen.getByText("비밀번호")).toBeInTheDocument();
});

test("Button disabled until regex test succeed", () => {
  const { emailInput, passwordInput, submitButton } = setup();
  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: "abc@naver.com" } });
  fireEvent.change(passwordInput, { target: { value: "1234" } });

  expect(submitButton).toBeEnabled();
});
