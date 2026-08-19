import { useState } from "react";

import SignupStep1 from "./components/SignupStep1";
import OTP from "./components/OTP";
import SignupStep2 from "./components/SignupStep2";
import SignupStep3 from "./components/SignupStep3";
import SignupStep4 from "./components/SignupStep4";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    pronouns: "",
  });

  // Go to next screen
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  // Go to previous screen
  const previousStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  // Finish signup
  const completeSignup = () => {
    setStep(6);
  };

  return (
    <>
      {/* STEP 1 */}
      {step === 1 && (
        <SignupStep1
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
        />
      )}

      {/* OTP */}
      {step === 2 && (
        <OTP
          onNext={nextStep}
          onBack={previousStep}
        />
      )}

      {/* STEP 2 */}
      {step === 3 && (
        <SignupStep2
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}

      {/* STEP 3 */}
      {step === 4 && (
        <SignupStep3
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}

      {/* STEP 4 */}
      {step === 5 && (
        <SignupStep4
          formData={formData}
          setFormData={setFormData}
          onBack={previousStep}
          onComplete={completeSignup}
        />
      )}

      {/* SUCCESS */}
      {step === 6 && <Success />}
    </>
  );
}

export default App;