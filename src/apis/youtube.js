import axios from "axios";
const KEY = "AIzaSyBHP5YHFzZxDjpsWZEn7T6jWoWHEpyN18A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
