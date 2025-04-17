import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import { NumberInput } from "../NumberInput";
import "@testing-library/jest-dom/vitest";

describe("NumberInput", () => {
  test("renders with label", () => {
    render(<NumberInput label="Quantity" />);
    const label = screen.getByText("Quantity");
    expect(label).toBeInTheDocument();
    const input = screen.getByTestId("number-input");
    expect(input).toHaveAttribute("aria-labelledby", label.id);
  });

  test("renders without label", () => {
    render(<NumberInput />);
    const label = screen.queryByRole("label");
    expect(label).not.toBeInTheDocument();
    const input = screen.getByTestId("number-input");
    expect(input).toBeInTheDocument();
  });

  test("renders increment and decrement buttons", () => {
    const { container } = render(<NumberInput label="Count" />);
    const incrementButton = container.querySelector('button[slot="increment"]');
    const decrementButton = container.querySelector('button[slot="decrement"]');
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  test("increments value when increment button is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { container } = render(
      <NumberInput label="Value" defaultValue={5} onChange={handleChange} />
    );
    const incrementButton = container.querySelector('button[slot="increment"]');
    const input = screen.getByTestId("number-input");

    expect(incrementButton).toBeInTheDocument();

    await user.click(incrementButton!);

    expect(input).toHaveValue("6");
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(6);
  });

  test("decrements value when decrement button is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { container } = render(
      <NumberInput label="Value" defaultValue={5} onChange={handleChange} />
    );
    const decrementButton = container.querySelector('button[slot="decrement"]');
    const input = screen.getByTestId("number-input");

    expect(decrementButton).toBeInTheDocument();

    await user.click(decrementButton!);

    expect(input).toHaveValue("4");
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  test("calls onChange when value is typed", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <NumberInput
        label="Type Value"
        defaultValue={10}
        onChange={handleChange}
      />
    );
    const input = screen.getByTestId("number-input");

    await user.clear(input);
    await user.type(input, "25");

    fireEvent.blur(input);

    expect(input).toHaveValue("25");

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(25);
    });
  });

  test("respects maxValue", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { container } = render(
      <NumberInput
        label="Max Value"
        defaultValue={9}
        maxValue={10}
        onChange={handleChange}
      />
    );
    const incrementButton = container.querySelector('button[slot="increment"]');
    const input = screen.getByTestId("number-input");

    expect(incrementButton).toBeInTheDocument();

    await user.click(incrementButton!);
    expect(input).toHaveValue("10");
    expect(handleChange).toHaveBeenCalledWith(10);

    await user.click(incrementButton!);
    expect(input).toHaveValue("10");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("respects minValue", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { container } = render(
      <NumberInput
        label="Min Value"
        defaultValue={1}
        minValue={0}
        onChange={handleChange}
      />
    );
    const decrementButton = container.querySelector('button[slot="decrement"]');
    const input = screen.getByTestId("number-input");

    expect(decrementButton).toBeInTheDocument();

    await user.click(decrementButton!);
    expect(input).toHaveValue("0");
    expect(handleChange).toHaveBeenCalledWith(0);

    await user.click(decrementButton!);
    expect(input).toHaveValue("0");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("handles disabled state", () => {
    const { container } = render(
      <NumberInput label="Disabled Field" isDisabled />
    );
    const input = screen.getByTestId("number-input");

    const incrementButton = container.querySelector('button[slot="increment"]');
    const decrementButton = container.querySelector('button[slot="decrement"]');

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    expect(input).toBeDisabled();
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();

    const wrapper = input.closest("div[data-disabled]");
    expect(wrapper).toHaveAttribute("data-disabled", "true");
  });
});
