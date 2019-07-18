import React from "react";

export default function Image({ img, title }) {
  return (
    <div className="img-container">
      <img alt={title} className="img" src={img} />
    </div>
  );
}
