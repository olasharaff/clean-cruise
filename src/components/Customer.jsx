import React from "react";
import { Customer } from '../ServiceData'
import './CustomerStyle.css'

export default function Customers(){
    return(
        <>
            {Customer.map((props, data) => {
                return (
                    <div className="customer-container" key={data}>
                        <div className="customer-text-content">
                            <h1 className="text-700">{props.customerTitle}</h1>
                            <p className="text-200">{props.customerContent}</p>
                            <button type="submit" className='text-500 cust-btn'>{props.customerBtn}</button>
                        </div>
                        <div className="customer-image">
                            <img
                                src={props.customerImg}
                                className='cus-image'
                                alt="index.html"
                            />
                        </div>
                    </div>
                );
            })}
            <div className="customer-footer">
            <div className="footer-content">
                    <img src='/assets/footer-logo.svg' alt="footer-logo" />
                    <p className="text-100 clr-white">Copyright 2018-2020 Clean Cruiz-All rights reserved.</p>
                </div>
            </div>
        </>
    )
}