import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = ({ type, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default Toast;
