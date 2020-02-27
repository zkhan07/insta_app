import React from "react";

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div> Loading... </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui segment">
            <div className="ui embed">
                <iframe src={videoSrc} ></iframe>
            </div>
            </div>
            <div className="ui segment">
                <h3 className="ui header">  {video.snippet.title} </h3>
                <p> {video.snippet.description} </p>
            </div>

          
           
        </div>
    );
}

export default VideoDetail;
