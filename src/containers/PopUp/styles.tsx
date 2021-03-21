import styled from "styled-components";

export const Container = styled.div`
  width: 426px;

  position: absolute;
  bottom: 20px;
  left: calc(50% - 213px);

  h3 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #565656;
  }

  h3 + p {
    margin-top: 12px;
  }
`;

export const CloseButton = styled.img`
  cursor: pointer;

  position: absolute;
  width: 24px;
  height: 24px;
  right: 10px;
  top: 8px;
  z-index: 999;
`;

export const StepContainer = styled.div`
  /* height: 200px; */

  padding: 24px 24px 40px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const InputContainer = styled.div``;

export const ContentWrapper = styled.div`
  border-radius: 8px;
  background-color: #fff;

  padding: 20px 24px 32px;
`;

export const ImageContainer = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  position: absolute;
  height: 184px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: linear-gradient(225deg, #ffecd2 0%, #fcb69f 100%);

  overflow: hidden;
`;
export const Image = styled.img`
  position: absolute;
  width: 337.84px;
  height: 247.42px;
  left: calc(50% - 337.84px / 2 + 11.92px);
  top: calc(50% - 247.42px / 2 - 0.29px);
  object-fit: contain;
`;

export const TextContainer = styled.div`
  margin-top: 184px;

  text-align: start;
`;