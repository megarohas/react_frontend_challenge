import React from "react";
import VideoItem from "../video_item/video_item.jsx";

const VideoList = props => {
  let renderVideos = videos =>
    videos.map((video, index) => (
      <VideoItem
        key={`VideoList_renderVideos_${index}`}
        video={video}
        current_category={props.current_category}
      />
    ));
  return <ul>{renderVideos(props.videos)}</ul>;
};

export default VideoList;
