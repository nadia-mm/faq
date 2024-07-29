import { render, screen, fireEvent } from "@testing-library/react";
import { FAQ } from "./faq/FAQ";
import data from "./faq/data";

describe("FAQ Component", () => {
  const { question, answer } = data[0];

  test("renders question and answer", () => {
    render(<FAQ question={question} answer={answer} showAnswer={true} />);
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.getByText(answer)).toBeInTheDocument();
  });

  test("answer is hidden initially if showAnswer is false", () => {
    render(<FAQ question={question} answer={answer} showAnswer={false} />);
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.queryByText(answer)).toBeNull();
  });

  test("answer is shown initially if showAnswer is true", () => {
    render(<FAQ question={question} answer={answer} showAnswer={true} />);
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.getByText(answer)).toBeInTheDocument();
  });

  test("toggles answer visibility on question click", () => {
    render(<FAQ question={question} answer={answer} showAnswer={false} />);
    const questionElement = screen.getByText(question);

    expect(screen.queryByText(answer)).toBeNull();

    fireEvent.click(questionElement);
    expect(screen.getByText(answer)).toBeInTheDocument();

    fireEvent.click(questionElement);
    expect(screen.queryByText(answer)).toBeNull();
  });
});
