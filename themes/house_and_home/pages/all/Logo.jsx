import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo_green.svg" alt="House and Home" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
