
"use client";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps{
    src?: string;
}
const VideoPlayer : React.FC<VideoPlayerProps> = ({src}) => {
  
  return (
    <div>
      <ReactPlayer
        width="500px"
        height="400px"
        url={src}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={src} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;