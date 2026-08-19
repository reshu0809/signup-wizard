import { useState } from "react";

function OTP({ onNext, onBack }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (!otp.trim()) {
      setError("Please enter the verification code.");
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter a 6-digit verification code.");
      return;
    }

    // Demo OTP
    if (otp !== "123456") {
      setError("Invalid verification code.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      onNext();
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <div className="step-number">
          Verification
        </div>

        <h1>Verify your account</h1>

        <p className="subtitle">
          Enter the 6-digit verification code.
        </p>

        <input
          type="text"
          inputMode="numeric"
          maxLength="6"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value.replace(/\D/g, ""));
            setError("");
          }}
          disabled={loading}
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

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
            onClick={handleVerify}
            disabled={loading}
        >
            {loading ? (
              <>
                <span className="spinner"></span>
                Verifying...
              </>
            ) : (
              "Verify"
       )}
           </button>

        </div>

      </div>
    </div>
  );
}

export default OTP;