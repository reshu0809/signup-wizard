import ProgressBar from "./ProgressBar";
import { useState } from "react";

function SignupStep2({
  formData,
  setFormData,
  onNext,
  onBack,
}) {
  const [error, setError] = useState("");

  const handleNext = () => {
    // Check name
    if (!formData.name.trim()) {
      setError("Name is required.");
      return;
    }

    // Check name length
    if (formData.name.trim().length > 50) {
      setError("Name must be less than 50 characters.");
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
          Step 2 of 4
        </div>
        <ProgressBar currentStep={2} />
        <h1>What's your name?</h1>

        <p className="subtitle">
          Enter your name
        </p>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
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

export default SignupStep2;