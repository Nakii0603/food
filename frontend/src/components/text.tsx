const SignHome = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<Step1 />, <Step2 />, <Step3 />];
  const nextStep = () => {
    setActiveStep((prevStep) =>
      prevStep === steps.length - 1 ? prevStep : prevStep + 1
    );
  };

  const prevStep = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? prevStep : prevStep - 1));
  };

  function renderSteps(steps: any, activeStep: any) {
    return steps.map((step: any, index: any) => {
      return index === activeStep ? step : null;
    });
  }

  return (
    <div>
      {renderSteps(steps, activeStep)}
      <button onClick={prevStep} disabled={activeStep === 0}>
        Previous
      </button>
      <button onClick={nextStep} disabled={activeStep === steps.length - 1}>
        Next
      </button>
    </div>
  );
};
