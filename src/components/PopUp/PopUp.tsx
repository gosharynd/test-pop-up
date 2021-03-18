import React from "react";
import * as Yup from "yup";
import * as S from "./styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  rating: Yup.number().required("Обязательное поле"),
  comment: Yup.string(),
});

const PopUp: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const handleClosePopUp = () => {
    setStep(0);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 10000);
  }, []);

  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const handlePressNextStep = () => {
    if (step >= steps.length - 1) {
      formik.submitForm();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const steps = [
    {
      component: <></>,
    },
    {
      component: (
        <Step1
          value={formik.values.rating}
          onChange={(value) => formik.setFieldValue("rating", value)}
          onNext={handlePressNextStep}
        />
      ),
    },
    {
      component: (
        <Step2
          value={formik.values.comment}
          onChange={(value) => formik.setFieldValue("comment", value)}
          onNext={handlePressNextStep}
        />
      ),
    },
  ];

  if (step === 0) return null;

  return (
    <S.Container>
      <S.Header>
        <S.CloseButton onClick={handleClosePopUp}>Close</S.CloseButton>
      </S.Header>
      <S.StepContainer>{steps[step].component}</S.StepContainer>
    </S.Container>
  );
};

export default PopUp;
