import React from "react";
import { NavData } from "../HeroData";



export default function Navbar() {
    return (
        <nav className="navbar-header">
            <div className="logo">
            <img src='/assets/primary-logo.svg' alt="primary-logo" />
                {/* <h2 className="text-600 clr-text-pink">Clean Cruiz</h2> */}
            </div>
            <ul className="primary-navigation">
                {NavData.map((props, data) => {
                    return (
                        <div>
                            <li key={data}>
                                <a className="text-200 clr-lg-bk" href={props.navlink}>{props.navtext}</a>
                            </li>
                        </div>
                    );
                })}
                <button className="login-btn">Login</button>
            </ul>
        </nav>
    );
}