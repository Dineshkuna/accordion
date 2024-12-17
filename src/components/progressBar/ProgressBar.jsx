import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    let timer;

    if (isUploading && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 5, 100)); // Increment by 5%
      }, 200); // Update every 200ms
    }

    return () => clearInterval(timer); // Cleanup timer on unmount or pause
  }, [isUploading, progress]);

  const handleStart = () => {
    if (progress < 100) setIsUploading(true);
  };

  const handlePause = () => {
    setIsUploading(false);
  };

  const handleReset = () => {
    setIsUploading(false);
    setProgress(0);
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-bar-info">
        {progress}% {progress === 100 && "Upload Complete!"}
      </div>
      <div className="progress-bar-controls">
        <button onClick={handleStart} disabled={isUploading || progress === 100}>
          {progress === 100 ? "Completed" : "Start"}
        </button>
        <button onClick={handlePause} disabled={!isUploading}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ProgressBar;
