import React from "react";

export default function Video({ video, title }) {
  return (
    <div className="video-container">
      <iframe src={video} title={title} />
    </div>
  );
}
