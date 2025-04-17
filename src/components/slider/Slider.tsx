import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  Label,
} from "react-aria-components";

export interface SliderProps extends AriaSliderProps {
  label?: string;
}

export const Slider = ({ label, ...props }: SliderProps) => {
  return (
    <AriaSlider
      {...props}
      className="flex flex-col items-stretch w-[200px] data-[disabled]:opacity-50"
    >
      {label && (
        <div className="flex mb-1">
          <Label className="flex-1 text-sm font-medium text-gray-800 data-[disabled]:text-gray-500">
            {label}
          </Label>
          <SliderOutput className="text-sm text-gray-600 data-[disabled]:text-gray-500" />
        </div>
      )}
      <SliderTrack className="relative w-full h-7">
        {({ state }) => (
          <>
            <div className="absolute h-1 top-[50%] -translate-y-1/2 w-full rounded-full bg-gray-200 data-[disabled]:bg-gray-100" />
            <div
              className="absolute h-1 top-[50%] -translate-y-1/2 rounded-full bg-primary data-[disabled]:bg-gray-400"
              style={{
                width: state.getThumbPercent(0) * 100 + "%",
              }}
            />
            <SliderThumb className="w-4 h-4 top-[50%] bg-primary rounded-full border-1 border-white shadow-sm cursor-grab absolute outline-none data-[dragging]:bg-primary data-[dragging]:cursor-grabbing focus-visible:ring-2 ring-primary ring-offset-1 data-[disabled]:bg-gray-400 data-[disabled]:cursor-not-allowed" />
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
};
