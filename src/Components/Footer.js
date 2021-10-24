import React from 'react';
import Facebook from"../assets/facebook.svg";
import Instagram from"../assets/instagram.svg";
import Twitter from"../assets/twitter.svg";
import "./Footer.css";

const Footer = () => {
    return ( <div>
        <div className="cont container-fluid" >
            <div className="row">
            <img src ={Facebook} style={{width:"2.3%",height:"2%"}}/>
            <img src ={Twitter} style={{width:"3%",height:"3%"}}/>
            <img src ={Instagram} style={{width:"3%",height:"3%"}}/>


            </div>
            <div className="row" ><h5>&copy; Cinema App-All Right Reserved</h5></div>
        </div>
    </div>);
}
 
export default Footer;