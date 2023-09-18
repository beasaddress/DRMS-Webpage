import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css";
//turn LEARN MORE into a button element or <Link /> that links to About and update the CSS
export default function Home() {
    return (
        <div className="home-page">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="text-wrapper">Risk Management Consulting</div>
                    <Link to="/About">
                    <div className="overlap">
                        <div className="div">Learn more</div>
                    </div>
                    </Link>
                    <div className="text-wrapper-2">at its’ best.</div>
                </div>
            </div>
        </div>
    );
};
