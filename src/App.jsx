import { useState } from "react";

import Terms from "./components/Terms";
import SignupStep1 from "./components/SignupStep1";
import OTP from "./components/OTP";
import SignupStep2 from "./components/SignupStep2";
import SignupStep3 from "./components/SignupStep3";
import SignupStep4 from "./components/SignupStep4";
import Success from "./components/Success";

function App() {
  // 0 = Landing Page
  // 1 = Terms & Conditions
  // 2 = Signup Step 1
  // 3 = OTP
  // 4 = Signup Step 2
  // 5 = Signup Step 3
  // 6 = Signup Step 4
  // 7 = Success

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
    setStep(7);
  };

  return (
    <>
      {/* =====================================
          LANDING PAGE
      ===================================== */}

      {step === 0 && (
        <div className="landing-page">
          <div className="landing-content">

            <h1>Welcome to Nubpack</h1>

            <p>
              Create your profile and get started.
            </p>

            <button onClick={() => setStep(1)}>
              Get Started
            </button>

          </div>
        </div>
      )}


      {/* =====================================
          TERMS & CONDITIONS
      ===================================== */}

      {step === 1 && (
        <Terms
          onBack={() => setStep(0)}
          onAccept={() => setStep(2)}
        />
      )}


      {/* =====================================
          SIGNUP STEP 1
      ===================================== */}

      {step === 2 && (
        <SignupStep1
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}


      {/* =====================================
          OTP
      ===================================== */}

      {step === 3 && (
        <OTP
          onNext={nextStep}
          onBack={previousStep}
        />
      )}


      {/* =====================================
          SIGNUP STEP 2
      ===================================== */}

      {step === 4 && (
        <SignupStep2
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}


      {/* =====================================
          SIGNUP STEP 3
      ===================================== */}

      {step === 5 && (
        <SignupStep3
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}


      {/* =====================================
          SIGNUP STEP 4
      ===================================== */}

      {step === 6 && (
        <SignupStep4
          formData={formData}
          setFormData={setFormData}
          onBack={previousStep}
          onComplete={completeSignup}
        />
      )}


      {/* =====================================
          SUCCESS
      ===================================== */}

      {step === 7 && <Success />}
    </>
  );
}

export default App;