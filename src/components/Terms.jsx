function Terms({ onAccept, onBack }) {
  return (
    <div className="terms-page">
      <div className="terms-box">

        <h1>Terms & Conditions</h1>

        <p className="terms-intro">
          Please review and accept our terms before
          continuing with your signup.
        </p>

        <div className="terms-text">
          <h2>Terms of Use</h2>

          <p>
            By continuing with this signup process, you agree
            to provide accurate information and use this
            application responsibly.
          </p>

          <p>
            You are responsible for ensuring that the
            information you provide is correct and up to date.
          </p>

          <p>
            Please review all information carefully before
            completing the signup process.
          </p>

          <p>
            By selecting "I Agree & Continue", you confirm
            that you have read and accepted these terms and
            conditions.
          </p>

          <p>
            If you do not agree with these terms, please do
            not continue with the signup process.
          </p>
        </div>

        <div className="terms-buttons">

          <button
            className="secondary-button"
            onClick={onBack}
          >
            Back
          </button>

          <button
            className="primary-button"
            onClick={onAccept}
          >
            I Agree & Continue
          </button>

        </div>

      </div>
    </div>
  );
}

export default Terms;