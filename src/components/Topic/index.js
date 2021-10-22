import React from "react";

function Topic({ children, id, label }) {
  return (
    <div className="topic" id={id} data-label={label}>
      {children}
    </div>
  );
}

export default Topic;
