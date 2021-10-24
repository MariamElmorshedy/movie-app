import { Rating } from '@mui/material';
import React from 'react';
import"./Movies.css"
import emptyHeart from"../../assets/heart.svg";

const Movies = (props) => {
  
  return ( <div>
    
    <div className="card movie "  >
            
            <img className="poster" src={props.poster} />
            <div className ="movie-info card-body movie-body">
            <img style={{width:"20px",height:"20px",marginTop: "-138px",position: "absolute", marginLeft: "153px"}} src={emptyHeart}/>
            <Rating name="read-only" value={props.vote_average} readOnly />
  
            <p className="max-lines" style={{color:"white",fontSize:"10px",lineBreak:"anywhere"}}>{props.overview}</p>
            </div>
          
          </div>
  </div> );
}
 
export default Movies;
