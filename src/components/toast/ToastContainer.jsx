import React, { useState } from "react";
import Toast from "./Toast";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now(); // Unique ID for each toast
    setToasts([...toasts, { id, type, message }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
      {/* Buttons for adding notifications */}
      <div className="buttons">
        <button onClick={() => addToast("success", "Operation Successful!")}>
          Show Success
        </button>
        <button onClick={() => addToast("error", "Something went wrong!")}>
          Show Error
        </button>
        <button onClick={() => addToast("info", "Here is some information.")}>
          Show Info
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
