import React from "react";
import { InputContainer, ContentWrapper } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

const Step2: React.FC<Props> = ({ value, onChange, onNext }) => {
  const handleInputChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <ContentWrapper>
      <InputContainer>
        <input
          placeholder="Leave a comment"
          value={value}
          onChange={handleInputChange}
        />
        <button onClick={onNext}>Go next</button>
      </InputContainer>
    </ContentWrapper>
  );
};

export default Step2;
