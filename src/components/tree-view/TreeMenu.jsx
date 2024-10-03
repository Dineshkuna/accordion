import React from "react";
import Menus from "./data";

const TreeMenu = () => {
  return (
    <div>
      {Menus.map((item, index) => <p key={index}> {item.label}</p>)}
    </div>
  );
};

export default TreeMenu;
