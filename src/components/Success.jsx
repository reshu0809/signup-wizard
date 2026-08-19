function Success() {
  return (
    <div className="signup-container">
      <div className="signup-card success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Profile Completed!</h1>

        <p className="subtitle">
          Your signup has been completed successfully.
        </p>

        <button
          className="primary-button"
          onClick={() => window.location.reload()}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default Success;