import React, { useEffect } from "react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from "../../assets/arrow-right.svg";
import next from "../../assets/arrow-left.svg";
import Movies from "./Movies";
import "./Carousel.css";
import Trailer from "./Trailer";

const TopRated = (props) => {
  let settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  let path = "http://image.tmdb.org/t/p/original";

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <h1 style={{ color: "white" }}>{props.header}</h1>
        <div style={{ display: "flex" }}>
          <div
            className="arrowLeft"
            onClick={() => sliderRef.current.slickNext()}
            style={{
              cursor: "pointer",
              width: "20",
              height: "20",
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <img src={next} style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            className="arrowRight"
            onClick={() => sliderRef.current.slickPrev()}
            style={{
              cursor: "pointer",
              width: "20",
              height: "20",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={prev} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
      <div className="carouselCont">
        <Slider ref={sliderRef} {...settings}>
          {props.data.map((res) => (
            <Trailer
              poster={path + res.poster_path}
              title={res.title}
              key={res.id}
              id={res.id}
              overview={res.overview}
              vote_average={res.vote_average}
              Like={props.Like}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRated;
