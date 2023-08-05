import React from "react";
import { Discount } from "../HeroData";
import "../components/DiscountStyle.css";

export default function Discounts() {
    return (
        <div>
            <div id="discount-container">
            {Discount.map((props, data) => {
                return (
                    <div className="discount-container" key={data}>
                        <div className="discount-text-content">
                            <h1 className="text-700">{props.disTitle}</h1>
                            <p className="text-100s">{props.disContent}</p>
                            <img src={props.disIcon} alt="index.html" />
                        </div>
                        <div className="discount-image">
                            <img
                                src={props.disImg}
                                className='dis-image'
                                alt="index.html"
                            />
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    );
}
