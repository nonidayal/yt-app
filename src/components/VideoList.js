import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  const finalVideos = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video}></VideoItem>;
  });

  return <div className="ui relaxed divided list">{finalVideos}</div>;
};

export default VideoList;
