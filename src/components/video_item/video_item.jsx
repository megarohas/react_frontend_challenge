import React from "react";

const VideoItem = props => {
  let renderVideo = video => {
    return (
      <div style={{ marginBottom: "20px" }}>
        <div>
          <strong style={{ marginRight: "5px" }}>Name: </strong> {video.name}
        </div>
        <div>
          <strong style={{ marginRight: "5px" }}>Description: </strong>
          {video.description}
        </div>
        {props.current_category === "tv_seasons" && (
          <div>
            <strong style={{ marginRight: "10px" }}>
              Number of episodes:{" "}
            </strong>
            {video.episodes.length}
          </div>
        )}
        <div>
          <strong style={{ marginRight: "5px" }}>Price (Buy):</strong>
          {video.prices.buy}
        </div>
        <div>
          <strong style={{ marginRight: "5px" }}>Price (Rent): </strong>
          {video.prices.rent}
        </div>
      </div>
    );
  };

  return <li>{renderVideo(props.video)}</li>;
};

export default VideoItem;
