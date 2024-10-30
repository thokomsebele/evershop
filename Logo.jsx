import PropTypes from "prop-types";
import React from "react";
import "./Logo.scss";

export default function Logo({ dashboardUrl }) {
  return (
    <div className="logo">
      <a href={dashboardUrl} className="flex items-end">
        <svg
          height="320px"
          version="1.1"
          viewBox="0 0 320 320"
          width="320px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.707,15.793l-13-13c-0.391-0.391-1.023-0.391-1.414,0l-13,13c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0  L16,4.914l8.014,8.014C24.013,12.953,24,12.975,24,13v15H8V18c0-0.553-0.448-1-1-1s-1,0.447-1,1v11c0,0.553,0.448,1,1,1h18  c0.553,0,1-0.447,1-1V14.914l2.293,2.293C28.488,17.402,28.744,17.5,29,17.5s0.512-0.098,0.707-0.293  C30.098,16.816,30.098,16.184,29.707,15.793z"
            fill="#009674"
          />
        </svg>
        <span className="font-bold">House and Home</span>
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired,
};

export const layout = {
  areaId: "header",
  sortOrder: 10,
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
