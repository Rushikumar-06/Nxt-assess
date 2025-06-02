import React from "react";
import "./Error.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <img src="null" alt="Error Illustration" className="error-image" />
      <h2 className="error-title">Oops! Something went wrong</h2>
      <p className="error-subtext">We are having some trouble</p>
      <button className="retry-button" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
}

export default ErrorPage;
