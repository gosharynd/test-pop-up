import React from "react";
import { Button } from "../../components";
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
      <h3>Расскажите подробнее</h3>
      <p>
        Напишите, пожалуйста, почему вы дали такую оценку. Это поможет нам
        сделать сервис лучше.
      </p>
      <InputContainer>
        <p>Комментарий</p>
        <textarea
          placeholder="Введите текст"
          value={value}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Button onClick={onNext}>Отправить отзыв</Button>
    </ContentWrapper>
  );
};

export default Step2;
