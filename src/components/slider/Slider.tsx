import React from "react";
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  Label,
} from "react-aria-components";
import styles from "./Slider.module.css";

export interface SliderProps extends AriaSliderProps {
  label?: string;
}

export const Slider = ({ label, ...props }: SliderProps) => {
  return (
    <AriaSlider {...props} className={styles.slider}>
      {label && <Label className={styles.label}>{label}</Label>}
      <div className={styles.outputContainer}>
        <SliderOutput className={styles.output} />
      </div>
      <SliderTrack className={styles.track}>
        <SliderThumb className={styles.thumb} />
      </SliderTrack>
    </AriaSlider>
  );
};
