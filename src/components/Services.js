import React from "react";
import "../styles/Services.css";
import fallingMan from '../assets/FallingMan.png';
import ConclusionContract from '../assets/ConclusionContract.png';
import management from '../assets/Management.png';
import safetyCare from '../assets/SafetyCare.png';
import line2 from '../assets/line-2.png';
import line3 from '../assets/line-3.png';

export default function Services () {
    return (
        <div className="services">
            <div className="text-wrapper">What We Do</div>
            <img className="line" alt="Line" src={line3} />
            <div className="div">Interested?</div>
            <div className="overlap">
                <img className="img" alt="Line" src={line2} />
                <p className="flexible-pricing">
                    <span className="span">
                        <br />
                    </span>
                    <span className="text-wrapper-2">Flexible pricing arrangements available</span>
                </p>
            </div>
            <div className="overlap-group">
                <div className="text-wrapper-3">Request for Services Form</div>
            </div>
            <p className="safety-loss">
                <span className="span">
                    Safety &amp; Loss Prevention
                    <br />
                </span>
                <span className="text-wrapper-2">
                    Site inspections and corresponding reports to ensure statutory compliance
                    <br />
                </span>
            </p>
            <img className="safety-care" alt="Safety care" src={safetyCare} />
            <p className="risk-management">
                <span className="span">
                    Risk Management Services
                    <br />
                </span>
                <span className="text-wrapper-2">
                    Assist with special project work, provide interim staff support based on each clients’ needs.
                </span>
            </p>
            <img className="management" alt="Management" src={management} />
            <p className="claims-management">
                <span className="span">
                    Claims Management Services
                    <br />
                </span>
                <span className="text-wrapper-2">Worker Compensation, Liability, Property and all other lines of coverage</span>
            </p>
            <img className="falling-man" alt="Falling man" src={fallingMan} />
            <img className="conclusion-contract" alt="Conclusion contract" src={ConclusionContract} />
            <p className="contract-insurance">
                <span className="span">
                    Contract Insurance Requirements
                    <br />
                </span>
                <span className="text-wrapper-2">
                    Insurance requirements, Limitation of Liability, Warranty, Indemnification Provision
                </span>
            </p>
        </div>
    );
};
