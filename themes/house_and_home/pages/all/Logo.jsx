import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img className="main_logo" src="/logo_green.png" alt="House and Home" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 1,
};
