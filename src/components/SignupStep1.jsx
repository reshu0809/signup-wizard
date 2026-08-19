import ProgressBar from "./ProgressBar";
import { useState } from "react";

function SignupStep1({ formData, setFormData, onNext }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    // 1. Check if email is empty
    if (!formData.email.trim()) {
      setError("Email is required.");
      return;
    }

    // 2. Check email format
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
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
          Step 1 of 4
        </div>
        <ProgressBar currentStep={1} />
        <h1>Create your account</h1>

        <p className="subtitle">
          Enter your email address
        </p>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });

            // Remove error when user starts correcting
            setError("");
          }}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <button
          className="primary-button"
          onClick={handleNext}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default SignupStep1;