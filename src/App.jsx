import { useState } from "react";

import Terms from "./components/Terms";
import SignupStep1 from "./components/SignupStep1";
import OTP from "./components/OTP";
import SignupStep2 from "./components/SignupStep2";
import SignupStep3 from "./components/SignupStep3";
import SignupStep4 from "./components/SignupStep4";
import Success from "./components/Success";

function App() {
  // 0 = Terms
  // 1 = Signup Step 1
  // 2 = OTP
  // 3 = Signup Step 2
  // 4 = Signup Step 3
  // 5 = Signup Step 4
  // 6 = Success

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    pronouns: "",
  });

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const previousStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const completeSignup = () => {
    setStep(6);
  };

  return (
    <>
      {/* TERMS & CONDITIONS */}

      {step === 0 && (
        <Terms
          onBack={() => setStep(0)}
          onAccept={() => setStep(1)}
        />
      )}

      {/* SIGNUP STEP 1 */}

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

      {/* SIGNUP STEP 2 */}

      {step === 3 && (
        <SignupStep2
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}

      {/* SIGNUP STEP 3 */}

      {step === 4 && (
        <SignupStep3
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}

      {/* SIGNUP STEP 4 */}

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