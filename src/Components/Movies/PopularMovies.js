import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import React, { Component } from "react";
import PopCard from "./PopCard";
import Slider from "react-slick";
import Trailer from "./Trailer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PopularMovies extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?&api_key=012ebb7f99bfc101c122059dc92a1b28&append_to_response=videos"
    );
    console.log(data.results);
    this.setState({ data: data.results });
  }
  render() {
    let settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1.75,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    let path = "http://image.tmdb.org/t/p/original";

    return (
      <div>
        <div className="carouselCont row">
          <Slider {...settings}>
            {this.state.data.map((res) => (
              <div className="col-3">
                <PopCard
                  id={res.id}
                  title={res.title}
                  poster={path + res.backdrop_path}
                  key={res.id}
                  vote_average={res.vote_average}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default PopularMovies;
