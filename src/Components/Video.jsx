// Video.js
import React from "react";
import blackholeVideo from "/blackhole.webm"; 

function Video() {
  return (
    <video
      autoPlay
      muted
      loop
      className="w-full h-full z-10"
    >
      <source src={blackholeVideo} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
