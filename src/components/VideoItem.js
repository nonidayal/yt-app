import React from "react";
import "./App.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}></img>

      <div className="content">
        <div className="header">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
