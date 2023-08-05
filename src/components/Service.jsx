import React from "react";
import {Service} from '../ServiceData'
import './ServiceStyle.css'

function SecService() {
    return (

        <div id="service">
        <div className="service-container ">
            <div className="hhhh">
                <h1>Our services include</h1>
            </div>


            <div  className='service-box relative'>
            {Service.map((props, data) => {
                return (
                    
                    <div className="service-boxs" key={data}>
                        <div className='circle-box relative'>
                            <img src={props.icon} alt={props.alt} />
                            <img src={props.servEllipse} className='serEllipse absolute' alt="" />
                        </div>
                        <div className='circle-content'>
                            <h1 className='text-600'>{props.title}</h1>
                            <p className='text-200'>{props.content}</p>
                        </div>
                     </div>
                           
                      
                  
                )
            })}
            </div>

            </div>
        </div>


    )
}

export default SecService;