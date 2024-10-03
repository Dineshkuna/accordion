import React, { useState } from "react";
import Menus from "./data";

const TreeMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleChild(index) {
    setActiveIndex(index);
  }

  return (
    <div>
      <div style={{
        backgroundColor : "blue",
        width : "300px",
        height: "300px",
        color : "#fff",
        fontSize: "20px",
        cursor: "pointer"

        
      }}>
        {Menus.map((item, index) => (
          <div key={index}>
            <p onClick={() => handleChild(index)}>
              
              <span>{item.label} +</span>
            </p>

            {activeIndex === index && item.children && (
              <div>
                {item.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.label}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeMenu;
