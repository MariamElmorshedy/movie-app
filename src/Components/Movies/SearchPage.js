import React, { useCallback, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Pagination.css";
import Trailer from "./Trailer";
import logo from "../../assets/logo.svg";
import NavBar from "../NavBar";
import Pagination from "./Pagination";

const SearchPage = (props) => {
  const [movies, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  let path = "http://image.tmdb.org/t/p/original";

  const printValue = (searchValue) => {
    searchValue
      ? fetch(
          `https://api.themoviedb.org/3/search/movie?&api_key=012ebb7f99bfc101c122059dc92a1b28&query=${searchValue.trim()}`
        )
          .then((res) => res.json())
          .then((json) => setMovie(json.results))
      : setMovie(null);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <NavBar print={printValue} />
      <div className="container-fluid">
        <div className="row">
          {currentPosts.map((res) => (
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Trailer
                poster={path + res.poster_path}
                title={res.title}
                key={res.id}
                id={res.id}
                overview={res.overview}
                vote_average={res.vote_average}
                Like={props.Like}
              />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SearchPage;
