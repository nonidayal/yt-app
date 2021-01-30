import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log(video.snippet.description);
  };
  componentDidMount() {
    this.onSearchVideo("");
  }
  onSearchVideo = async (term) => {
    const videos = await youtube.get("/search", {
      params: {
        q: term,
        type: "video",
      },
    });
    this.setState({
      videos: videos.data.items,
      selectedVideo: videos.data.items[0],
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchVideo}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
