import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      {/* Tab Headers */}
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        <div
          className="tab-panel"
          key={activeTab}
          style={{
            animation: "fade-in 0.3s ease-in-out",
          }}
        >
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
