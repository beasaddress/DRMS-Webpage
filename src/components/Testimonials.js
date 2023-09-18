import React from "react";
import "../styles/Testimonials.css";
import testimonyImg from '../images/testimonypage1.jpg';
export default function Testimonials () {
    return (
        <div className="testimonials">
            <img className="testimonypage" alt="Testimonypage" src={testimonyImg} />
            <div className="text-wrapper">Notes from our Clients</div>
            <img className="line" alt="Line" src="line-1.svg" />
            <p className="i-hired-marco-in-the">
                “I hired Marco in the spring of 2019. When I started my position with a one year backlog of contracts to review,
                he did a thorough analysis in a matter of two weeks clean with recommendations, professional input, and prompt
                response time. I highly recommend DRMS for any of your Risk Management needs! ”&nbsp;&nbsp;
                <br />
                <br />
                -John Smith, CEO, Sacramento Bee
            </p>
        </div>
    );
};
