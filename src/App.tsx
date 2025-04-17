import { useState } from "react";
import "./App.css";
import { Button } from "./components/button/button";
import { Input } from "./components/input/Input";
import { NumberInput } from "./components/numberInput/NumberInput";
import { Slider } from "./components/slider/Slider";

function App() {
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState<number | undefined>(0); // Default value for slider/number input

  const handleClear = () => {
    setTextValue("");
    setNumberValue(undefined); // Or set to a default like 0 or 50 if preferred
  };

  const handleSubmit = () => {
    const formData = {
      text: textValue,
      number: numberValue,
    };
    console.log("Form Submitted:", formData);
    alert(
      `Form Submitted:\nText: ${formData.text}\nNumber: ${
        formData.number ?? "N/A"
      }`
    ); // Handle undefined case in alert
  };

  // Ensure numberValue is within slider bounds (assuming 0-100)
  // Provide a default value (e.g., 50) if numberValue is undefined for the slider
  const sliderValue =
    numberValue === undefined ? 50 : Math.max(0, Math.min(100, numberValue));

  // Handler for Slider onChange, ensuring we pass a number to setNumberValue
  const handleSliderChange = (value: number | number[]) => {
    // Assuming a single thumb slider, value should be number
    if (typeof value === "number") {
      setNumberValue(value);
    }
    // If it could be a range slider, handle the array case appropriately
    // else if (Array.isArray(value)) { /* handle range */ }
  };

  return (
    <>
      <div className="app-container w-96 h-72">
        <form
          className="form-container flex flex-col justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            label="Name"
            value={textValue}
            onChange={setTextValue}
            placeholder="enter text"
          />

          <div className="flex gap-4 justify-between items-end">
            <NumberInput
              label="Size (GB)"
              value={numberValue}
              onChange={setNumberValue}
              minValue={0}
              maxValue={100}
              step={1}
            />

            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              minValue={0}
              maxValue={100}
              step={1}
            />
          </div>
          <div className="flex justify-between gap-2">
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              icon="trashbin"
            >
              Clear
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="app-container">
        <h2>Button Examples</h2>
        <div className="button-examples">
          <Button size="medium" variant="contained" color="primary">
            Primary Contained
          </Button>
          <Button size="medium" variant="outlined" color="primary">
            Primary Outlined
          </Button>
          <Button size="medium" variant="contained" color="secondary">
            Secondary Contained
          </Button>
          <Button size="medium" variant="outlined" color="secondary">
            Secondary Outlined
          </Button>
          <Button size="small" variant="contained" color="primary">
            Small Primary
          </Button>
          <Button size="small" variant="outlined" color="secondary">
            Small Secondary
          </Button>
          <Button size="medium" variant="contained" color="primary" icon="plus">
            With Icon
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            icon="minus"
          >
            With Icon
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            icon="plus"
            iconOnly
          />
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            icon="minus"
            iconOnly
          />
          <Button isDisabled>Disabled Contained</Button>
          <Button variant="outlined" isDisabled>
            Disabled Outlined
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
