import React from "react";
import VideoList from "./VideoList";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  } else if (video.snippet) {
    const videURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={videURL}></iframe>
        </div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
};

export default VideoDetail;
