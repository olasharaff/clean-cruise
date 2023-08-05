import React from "react";
import Navbar from "./Navbar";
import { HeroMain, HeroLogo } from "../HeroData";
import "./HeroStyle.css";

function Hero() {
    return (
        <div>
            <Navbar />

            {HeroMain.map((props, data) => {
                return (
                    <div className="main-container" key={data}>
                        <div className="text-content">
                            <h1 className="text-800">{props.maintitle} </h1>
                            <p className="text-400">{props.maincontent}</p>
                            <button className="text-500 book-btn">{props.mainbtn}</button>
                        </div>
                        <div className="image-content">
                            <img src={props.mainImage} className="lion" alt="" />
                        </div>
                    </div>
                );
            })}
            <div className="hero-footer">
            {HeroLogo.map((props, data) => {
                return (
                    <div className="" key={data}>
                        
                            <img src={props.mainlogo} className='logo'
                                alt={props.alt} />

                        </div>
                       
                               
                        
                      
                 
                );
            })}
            </div>
           
        </div>
    );
}
export default Hero;
