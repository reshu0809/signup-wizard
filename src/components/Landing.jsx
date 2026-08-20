function Landing({ onGetStarted }) {
  return (
    <div className="landing-page">

      <div className="landing-content">

        <h1>Welcome to Nubpack</h1>

        <p>
          Create your profile and get started.
        </p>

        <button onClick={onGetStarted}>
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Landing;