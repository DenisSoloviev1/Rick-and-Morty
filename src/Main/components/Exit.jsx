import React from "react";
import { NavLink } from "react-router-dom";


export default function Exit({to}) {
  return (
    <NavLink to={to} className={"exit"}>
      <svg viewBox="0 0 382.071 382.071">
        <g>
          <g id="Layer_x0020_1_2_">
            <path d="m84.414 168.984h297.657v44.102h-297.657l74.155 74.155-31.181 31.182-127.388-127.388 127.388-127.387 31.181 31.181z" />
          </g>
        </g>
      </svg>
      <p> GO BACK</p>
    </NavLink>
  );
}
