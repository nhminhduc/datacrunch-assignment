import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../Button";
import "@testing-library/jest-dom/vitest";

describe("Button", () => {
  test("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button.className).toMatch(/button-base/);
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute("type", "button");
  });

  test("applies correct variant styles", () => {
    const { rerender } = render(
      <Button variant="contained" color="primary">
        Contained Primary
      </Button>
    );
    let button = screen.getByRole("button", { name: /contained primary/i });
    expect(button).toHaveClass("bg-primary", "text-white", "border-primary");

    rerender(
      <Button variant="contained" color="secondary">
        Contained Secondary
      </Button>
    );
    button = screen.getByRole("button", { name: /contained secondary/i });
    expect(button).toHaveClass("bg-gray-200", "text-black", "border-gray-200");

    rerender(
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
    );
    button = screen.getByRole("button", { name: /outlined primary/i });
    expect(button).toHaveClass(
      "bg-transparent",
      "text-primary",
      "border-primary"
    );

    rerender(
      <Button variant="outlined" color="secondary">
        Outlined Secondary
      </Button>
    );
    button = screen.getByRole("button", { name: /outlined secondary/i });
    expect(button).toHaveClass(
      "bg-transparent",
      "text-black",
      "border-gray-400"
    );
  });

  test("applies correct input variant styles", () => {
    render(<Button variant="input">Input Button</Button>);
    const button = screen.getByRole("button", { name: /input button/i });
    expect(button).toHaveClass("bg-gray-300", "border-none");
    expect(button).not.toHaveClass("bg-primary", "border-primary");
  });

  test("handles disabled state", () => {
    const handleClick = vi.fn();
    render(
      <Button isDisabled onClick={handleClick}>
        Disabled
      </Button>
    );
    const button = screen.getByRole("button", { name: /disabled/i });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("disabled");

    button.click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("renders icon correctly", () => {
    render(<Button icon="plus">With Icon</Button>);

    const button = screen.getByRole("button", { name: /with icon/i });
    const iconContainer = screen.getByTestId("button-icon");

    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toContainElement(
      iconContainer.querySelector("svg") as SVGElement
    );
    expect(button).toContainElement(iconContainer);
  });

  test("handles click events", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    await user.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalledTimes(2);

    await user.keyboard(" ");
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test("applies focus states correctly", async () => {
    const user = userEvent.setup();
    render(<Button>Focus me</Button>);
    const button = screen.getByRole("button", { name: /focus me/i });

    expect(button).not.toHaveFocus();

    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toBeVisible();

    await user.tab();
    expect(button).not.toHaveFocus();
  });

  test("handles different sizes", () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveClass(
      "px-2",
      "py-1",
      "text-xs",
      "leading-4",
      "rounded-lg"
    );

    rerender(<Button size="medium">Medium</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass(
      "max-w-[135px]",
      "px-6",
      "py-2",
      "text-sm",
      "leading-5",
      "rounded-lg"
    );

    rerender(<Button size="input">Input</Button>);
    button = screen.getByRole("button");
    expect(button).not.toHaveClass("px-6", "px-12");
  });
});
