import axios from "axios";

const KEY = "AIzaSyBACdHWMgTVRXN5KzORvGxLw9Y149xNaj8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 17,
        key: KEY,
    }
});