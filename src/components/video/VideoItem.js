import React from 'react';
import "./VideoItem.css";
 
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ () =>  onVideoSelect(video)} className="item video-item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
              <div className="header"><h4>{video.snippet.title}</h4> </div>
            </div>
        </div>
    );
};
   
export default VideoItem;

