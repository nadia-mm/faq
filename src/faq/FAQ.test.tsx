import { render, screen, fireEvent } from "@testing-library/react";
import { FAQ } from "./FAQ";

describe("FAQ Component", () => {
  const question = "How many bones does a cat have?";
  const answer = "A cat has 230 bones - 6 more than a human";

  test("renders question text", () => {
    render(<FAQ question={question} answer={answer} />);
    const questionElement = screen.getByText(question);
    expect(questionElement).toBeInTheDocument();
  });

  test("does not display the answer initially", () => {
    render(<FAQ question={question} answer={answer} />);
    const answerElement = screen.queryByText(answer);
    expect(answerElement).not.toBeInTheDocument();
  });

  test("toggles the answer when question is clicked", () => {
    render(<FAQ question={question} answer={answer} />);

    fireEvent.click(screen.getByText(question));
    const answerElement = screen.getByText(answer);
    expect(answerElement).toBeInTheDocument();

    fireEvent.click(screen.getByText(question));
    expect(answerElement).not.toBeInTheDocument();
  });

  test("renders with answer visible if showAnswer prop is true", () => {
    render(<FAQ question={question} answer={answer} showAnswer={true} />);
    const answerElement = screen.getByText(answer);
    expect(answerElement).toBeInTheDocument();
  });

  test("handles keyboard toggle for accessibility", () => {
    render(<FAQ question={question} answer={answer} />);

    const questionElement = screen.getByText(question);
    questionElement.focus();

    fireEvent.keyDown(questionElement, { key: "Enter", code: "Enter" });
    expect(screen.getByText(answer)).toBeInTheDocument();

    fireEvent.keyDown(questionElement, { key: " ", code: "Space" });
    expect(screen.queryByText(answer)).not.toBeInTheDocument();
  });
});
