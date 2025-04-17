import "./App.css";
import { useState } from "react";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { NumberInput } from "./components/numberInput/NumberInput";
import { Slider } from "./components/slider/Slider";

function App() {
  const [textValue, setTextValue] = useState("");
  const [size, setSize] = useState<number | undefined>(0);
  const [exampleText, setExampleText] = useState("Initial Value");
  const [exampleNumber, setExampleNumber] = useState<number | undefined>(25);

  const handleClear = () => {
    setTextValue("");
    setSize(0);
  };

  const handleSubmit = () => {
    const formData = {
      text: textValue,
      size: size,
    };
    console.log("Form Submitted:", formData);
    alert(
      `Form Submitted:\nText: ${formData.text}\nSize: ${
        formData.size ?? "N/A"
      } GB`
    );
  };

  const sliderValue =
    size === undefined ? 50 : Math.max(0, Math.min(100, size));

  const handleSliderChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setSize(value);
    }
  };

  return (
    <>
      <div className="app-container w-[367px] h-[280px]">
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
              value={size}
              onChange={setSize}
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
              color="primary"
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
      <div className="app-container mt-4 p-4 border rounded">
        <h2>Component Examples</h2>

        {/* Input Examples */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Input</h3>
          <div className="flex flex-col items-start gap-4">
            <Input
              label="Basic Input"
              value={exampleText}
              onChange={setExampleText}
              placeholder="Enter text here"
            />
            <Input
              label="Disabled Input"
              value="Cannot change"
              onChange={() => {}}
              placeholder="Disabled"
              isDisabled
            />
          </div>
        </div>

        {/* NumberInput Examples */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Number Input</h3>
          <div className="flex flex-col items-start gap-4">
            <NumberInput
              label="Basic Number Input (0-50, step 5)"
              value={exampleNumber}
              onChange={setExampleNumber}
              minValue={0}
              maxValue={50}
              step={5}
            />
            <NumberInput
              label="Disabled Number Input"
              value={10}
              onChange={() => {}}
              minValue={0}
              maxValue={100}
              isDisabled
            />
          </div>
        </div>

        {/* Button Examples */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Button - Variants & Colors (Medium)
          </h3>
          <div className="flex flex-wrap items-start gap-2">
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
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Small Size</h3>
          <div className="flex flex-wrap items-start gap-2">
            <Button size="small" variant="contained" color="primary">
              Small Primary
            </Button>
            <Button size="small" variant="outlined" color="secondary">
              Small Secondary
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">With Icon (Left)</h3>
          <div className="flex flex-wrap items-start gap-2">
            <Button
              size="medium"
              variant="contained"
              color="primary"
              icon="plus"
            >
              Medium Primary
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              icon="minus"
            >
              Small Secondary
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">With Icon (Right)</h3>
          <div className="flex flex-wrap items-start gap-2">
            <Button
              size="medium"
              variant="contained"
              color="primary"
              icon="plus"
              iconPosition="right"
            >
              Medium Primary
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              icon="minus"
              iconPosition="right"
            >
              Small Secondary
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Icon Only</h3>
          <div className="flex flex-wrap items-start gap-2">
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
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Disabled</h3>
          <div className="flex flex-wrap items-start gap-2">
            <Button isDisabled>Disabled Contained</Button>
            <Button variant="outlined" isDisabled>
              Disabled Outlined
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
