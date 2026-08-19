import { useState } from "react";
import ProgressBar from "./ProgressBar";

function SignupStep4({
  formData,
  setFormData,
  onBack,
  onComplete,
}) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // STEP 4 VALIDATION
  const handleComplete = () => {
    // Check if pronouns are selected
    if (!formData.pronouns) {
      setError("Please select your pronouns.");
      return;
    }

    // Validation passed
    setError("");
    setLoading(true);

    // Simulate submission/loading
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        {/* PROGRESS BAR */}
        <ProgressBar currentStep={4} />

        <h1>Tell us about yourself</h1>

        <p className="subtitle">
          Select your pronouns
        </p>

        {/* PRONOUNS */}
        <select
          value={formData.pronouns}
          onChange={(e) => {
            setFormData({
              ...formData,
              pronouns: e.target.value,
            });

            // Remove error when user selects an option
            setError("");
          }}
          disabled={loading}
        >
          <option value="">
            Select pronouns
          </option>

          <option value="He/Him">
            He/Him
          </option>

          <option value="She/Her">
            She/Her
          </option>

          <option value="They/Them">
            They/Them
          </option>
        </select>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* BUTTONS */}
        <div className="button-row">

          <button
            className="back-button"
            onClick={onBack}
            disabled={loading}
          >
            Back
          </button>

          <button
            className="primary-button"
            onClick={handleComplete}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Completing...
              </>
            ) : (
              "Complete"
            )}
          </button>

        </div>

      </div>
    </div>
  );
}

export default SignupStep4;