import axios from "axios";
import React, { Component } from "react";
class Videos extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/videos?&api_key=012ebb7f99bfc101c122059dc92a1b28`
    );
    this.setState({ data: data.results[0].key });
    console.log(this.state.data);
  }
  render() {
    let path = "https://www.youtube.com/embed/";

    return (
      <div>
        <iframe width="420" height="315" src={path + this.state.data}></iframe>
      </div>
    );
  }
}

export default Videos;
