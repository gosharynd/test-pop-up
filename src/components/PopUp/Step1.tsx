import React from "react";
import Slider from "rc-slider";
import { SliderContainer } from "./styles";

interface Props {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

const MIN_VALUE = 0;
const MAX_VALUE = 5;
const STEP_VALUE = 1;

const Step1: React.FC<Props> = ({ value, onChange, onNext }) => {
  return (
    <SliderContainer>
      <div>
        <h2>{value}</h2>
      </div>
      <Slider
        min={MIN_VALUE}
        max={MAX_VALUE}
        step={STEP_VALUE}
        value={value}
        onChange={onChange}
      />
      <button onClick={onNext}>Go next</button>
    </SliderContainer>
  );
};

export default Step1;
