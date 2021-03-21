import React from "react";
import { InputContainer } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const Step1: React.FC<Props> = ({ value, onChange, onNext }) => {
  const handleInputChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer>
      <input
        placeholder="Leave a comment"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={onNext}>Go next</button>
    </InputContainer>
  );
};

export default Step1;
