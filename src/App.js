import React from "react";
import "./App.css";
import CategorySwitch from "./components/category_switch/category_switch.jsx";
import VideoList from "./components/video_list/video_list.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          label: "Films",
          value: "films"
        },
        {
          label: "TV Seasons",
          value: "tv_seasons"
        }
      ],
      current_category: "films",
      video_library: { films: [], tv_seasons: [] },
      current_category_videos: []
    };
  }

  componentDidMount() {
    fetch("/videos.json")
      .then(response => response.json())
      .then(video_library => this.setState({ video_library }));
  }

  render() {
    let { current_category_videos, current_category, categories } = this.state;
    return (
      <div>
        <CategorySwitch categories current_category />
        <VideoList videos={current_category_videos} />
      </div>
    );
  }
}

export default App;
