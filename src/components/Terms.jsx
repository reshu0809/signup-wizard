function Terms({ onContinue, onBack }) {
  return (
    <div className="terms-page">

      <div className="terms-box">

        <h1>Terms & Conditions</h1>

        <p>
          Please read and accept the terms and conditions
          before continuing.
        </p>

        <div className="terms-text">
          <p>
            By continuing, you agree to our terms and conditions
            and confirm that the information you provide is correct.
          </p>

          <p>
            Please use the application responsibly and provide
            accurate information.
          </p>
        </div>

        <div className="terms-buttons">

          <button onClick={onBack}>
            Back
          </button>

          <button onClick={onContinue}>
            Continue
          </button>

        </div>

      </div>

    </div>
  )
}

export default Terms