import React from "react";
import { Image, ImageContainer, ContentWrapper, TextContainer } from "./styles";
import { Button } from "../../components";

interface Props {
  onNext: () => void;
}

const Step0: React.FC<Props> = ({ onNext }) => {
  return (
    <ContentWrapper>
      <ImageContainer>
        <Image src="/assets/illustration.png" />
      </ImageContainer>
      <TextContainer>
        <h3>Помогите нам стать лучше</h3>
        <p>
          Поделитесь своими впечатлениями о работе в сервисе. Это займет меньше
          двух минут.
        </p>
      </TextContainer>
      <Button onClick={onNext}>Пройти опрос</Button>
    </ContentWrapper>
  );
};

export default Step0;
