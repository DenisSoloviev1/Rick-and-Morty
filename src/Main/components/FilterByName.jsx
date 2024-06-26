import React from "react";
import "../Main.scss";

export default function FilterByName({ text }) {
  return (
    <div className="filter">
      <button>
        <svg viewBox="0 0 512 512">
          <path d="m512 478.647-174.308-174.309c24.866-31.965 39.698-72.103 39.698-115.644-.001-104.044-84.651-188.694-188.695-188.694s-188.695 84.65-188.695 188.695 84.65 188.695 188.695 188.695c43.54 0 83.679-14.831 115.644-39.698l174.308 174.308zm-464.826-289.952c0-78.039 63.482-141.521 141.521-141.521s141.521 63.482 141.521 141.521-63.482 141.521-141.521 141.521-141.521-63.482-141.521-141.521z" />
        </svg>
      </button>

      <input type="text" placeholder={text} />
    </div>
  );
}
