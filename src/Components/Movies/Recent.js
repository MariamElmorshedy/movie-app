import axios from "axios";
import React, { Component } from "react";
import TopRated from "./TopRated";
class Recent extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?&api_key=012ebb7f99bfc101c122059dc92a1b28"
    );
    this.setState({ data: data.results });
  }

  render() {
    return (
      <div>
        <TopRated header={this.props.header} data={this.state.data} />
      </div>
    );
  }
}

export default Recent;
