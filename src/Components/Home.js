import axios from "axios";
import React, { Component } from "react";
import Movies from "./Movies/Movies";
import "./Home.css";
import PopularMovies from "./Movies/PopularMovies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopRated from "./Movies/TopRated";
import Recent from "./Movies/Recent";
import Footer from "./Footer";
import Search from "./Movies/Search";
import NavBar from "./NavBar";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";

class Home extends React.Component {
  state = {
    data: [],
    headers: [{ text: "Top Rated" }, { text: "Reacent Rated" }],
    isLiked: false,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?&api_key=012ebb7f99bfc101c122059dc92a1b28"
    );
    this.setState({ data: data.results });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    let path = "http://image.tmdb.org/t/p/original";
    return (
      <div>
        <NavBar data={this.props.location.username} />
        <PopularMovies />

        <TopRated
          Like={this.state.isLiked}
          header={this.state.headers[0].text}
          data={this.state.data}
        />
        <Recent header={this.state.headers[1].text} />
        <div>
          <div>
            <img src={Facebook} style={{ width: "20px", height: "20px" }} />
            <img src={Twitter} style={{ width: "20px", height: "20px" }} />
            <img src={Instagram} style={{ width: "20px", height: "20px" }} />
          </div>
          <div>
            <h5>&copy; Cinema App-All Right Reserved</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
