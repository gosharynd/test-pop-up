import React from "react";
import { ContentWrapper, RatingContainer, RatingBox } from "./styles";

interface Props {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

const MAX_COUNT = 10;

const Step1: React.FC<Props> = ({ onChange, onNext }) => {
  const rating = Array(MAX_COUNT)
    .fill(0)
    .map((item, index) => index + 1);

  const handleSelect = (item: number) => {
    onChange(item);
    onNext();
  };

  return (
    <ContentWrapper
      style={{
        height: 331,
      }}
    >
      <h3>Оцените продукт по 10-балльной шкале</h3>
      <p>
        Какова вероятность, что вы порекомендуете сервис друзьям, коллегам,
        партнерам?
      </p>
      <RatingContainer>
        {rating.map((item, index) => {
          return (
            <RatingBox
              key={index.toString()}
              onClick={() => handleSelect(item)}
            >
              {item}
            </RatingBox>
          );
        })}
      </RatingContainer>
    </ContentWrapper>
  );
};

export default Step1;
