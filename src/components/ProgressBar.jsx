function ProgressBar({ currentStep }) {
  return (
    <div className="progress-container">
      <div className="progress-text">
        Step {currentStep} of 4
      </div>

      <div className="progress-bar">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={
              step <= currentStep
                ? "progress-step active"
                : "progress-step"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;