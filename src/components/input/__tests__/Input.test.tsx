import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Input } from "../Input";
import "@testing-library/jest-dom/vitest";

describe("Input", () => {
  test("renders with label and placeholder", () => {
    render(<Input label="Username" placeholder="Enter username" />);

    const label = screen.getByText("Username");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Enter username");
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute("aria-labelledby", label.id);
  });

  test("renders without label", () => {
    render(<Input placeholder="Enter something" />);

    const input = screen.getByPlaceholderText("Enter something");
    expect(input).toBeInTheDocument();

    const label = screen.queryByRole("label");
    expect(label).not.toBeInTheDocument();
  });

  test("renders without placeholder", () => {
    render(<Input label="Password" />);

    const label = screen.getByText("Password");
    expect(label).toBeInTheDocument();

    const input = screen.getByLabelText("Password");
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute("placeholder");
  });

  test("calls onChange handler when value changes", () => {
    const handleChange = vi.fn();
    render(<Input label="Test Input" value="" onChange={handleChange} />);

    const input = screen.getByLabelText("Test Input");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("new value");
  });

  test("applies necessary classes for styling", () => {
    render(<Input label="Styled Input" placeholder="style me" />);
    const input = screen.getByPlaceholderText("style me");

    expect(input).toHaveClass("border");
    expect(input).toHaveClass("border-gray-400");
    expect(input).toHaveClass("rounded-lg");
    expect(input).toHaveClass("focus:border-primary");
    expect(input).toHaveClass("focus:ring-primary");
  });

  test("handles disabled state", () => {
    render(<Input label="Disabled Input" isDisabled />);
    const input = screen.getByLabelText("Disabled Input");

    expect(input).toBeDisabled();
    const textField = input.closest('div[role="textbox"]')?.parentElement;
    if (textField) {
      expect(textField).toHaveAttribute("data-disabled", "true");
    }
  });
});
