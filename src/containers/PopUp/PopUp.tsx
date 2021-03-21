import React from "react";
import * as Yup from "yup";
import * as S from "./styles";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  rating: Yup.number().required("Обязательное поле"),
  comment: Yup.string(),
});

const PopUp: React.FC = () => {
  const [step, setStep] = React.useState<number | null>(1);
  const handleClosePopUp = () => {
    setStep(null);
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setStep(1);
  //   }, 10000);
  // }, []);

  const formik = useFormik({
    initialValues: {
      rating: 5,
      comment: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const handlePressNextStep = () => {
    if (step === steps.length - 1) {
      formik.submitForm();
    } else {
      setStep((prev) => (prev !== null ? prev + 1 : 0));
    }
  };

  const steps = [
    <Step0 onNext={handlePressNextStep} />,
    <Step1
      value={formik.values.rating}
      onChange={(value) => formik.setFieldValue("rating", value)}
      onNext={handlePressNextStep}
    />,
    <Step2
      value={formik.values.comment}
      onChange={(value) => formik.setFieldValue("comment", value)}
      onNext={handlePressNextStep}
    />,
  ];

  if (step === null) return null;

  return (
    <S.Container>
      <S.CloseButton onClick={handleClosePopUp} src="/assets/close-line.png" />
      {steps[step]}
    </S.Container>
  );
};

export default PopUp;
