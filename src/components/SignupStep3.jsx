import ProgressBar from "./ProgressBar";
import { useState } from "react";

function SignupStep3({
  formData,
  setFormData,
  onNext,
  onBack,
}) {
  const [error, setError] = useState("");

  const handleNext = () => {
    // Check empty age
    if (!formData.age.trim()) {
      setError("Age is required.");
      return;
    }

    // Check numbers only
    if (!/^[0-9]+$/.test(formData.age)) {
      setError("Age must contain numbers only.");
      return;
    }

    // Convert age to number
    const age = Number(formData.age);

    // Check age
    if (age < 18) {
      setError("You must be 18 or older.");
      return;
    }

    // Check maximum age
    if (age > 100) {
      setError("Please enter a valid age.");
      return;
    }

    // Everything is correct
    setError("");
    onNext();
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="step-number">
          Step 3 of 4
        </div>
        <ProgressBar currentStep={3} />
        <h1>How old are you?</h1>

        <p className="subtitle">
          Enter your age
        </p>

        <input
          type="text"
          inputMode="numeric"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => {
            setFormData({
              ...formData,
              age: e.target.value,
            });

            setError("");
          }}
        />

        {/* ERROR */}
        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <div className="button-row">

          <button
            className="back-button"
            onClick={onBack}
          >
            Back
          </button>

          <button
            className="primary-button"
            onClick={handleNext}
          >
            Continue
          </button>

        </div>

      </div>
    </div>
  );
}

export default SignupStep3;