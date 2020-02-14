import React from "react";

const VideoItem = props => {
  let renderField = field => (
    <div key={`renderField_${field.label}`}>
      <strong style={{ marginRight: "5px" }}>{field.label}</strong>
      {field.content}
    </div>
  );

  let renderVideo = video => {
    return (
      <div style={{ marginBottom: "20px" }}>
        {renderField({ label: "Name: ", content: video.name })}
        {renderField({ label: "Description: ", content: video.description })}
        {props.current_category === "tv_seasons" &&
          renderField({
            label:
              video.episodes.length > 1 ? "Number of episodes: " : "TV Film",
            content: video.episodes.length > 1 ? video.episodes.length : ""
          })}
        {renderField({ label: "Price (Buy):", content: video.prices.buy })}
        {renderField({ label: "Price (Rent): ", content: video.prices.rent })}
      </div>
    );
  };

  return <li>{renderVideo(props.video)}</li>;
};

export default VideoItem;
