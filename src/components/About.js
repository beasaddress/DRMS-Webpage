import React from "react";
import "../styles/About.css";
//about img might have the words pasted on to it already?
export default function About () {
    return (
        <div className="about">
            <div className="div">
                <div className="overlap-group">
                    <p className="text-wrapper">
                        BOUTIQUE RISK MANAGEMENT AND LOSS PREVENTION SERVICES CUSTOMIZED FOR THE INDIVIDUAL NEEDS OF EACH CLIENT
                    </p>
                    <div className="text-wrapper-2">“</div>
                    <div className="text-wrapper-3">”</div>
                </div>
                <div className="text-wrapper-4">About Us</div>
                <img className="line" alt="Line" src="../assets/line-1.svg" />
                <p className="DRMS-supports">
                    DRMS supports clients with unique and challenging projects, as well as provide interim staff support. The
                    principal Consultant, Marco Sandoval, brings over 30 years of experience in Risk Management, Insurance, Loss
                    Prevention and safety in both private and public sectors. He is an active member of Risk &amp; Insurance
                    Management Society Inc (RIMS)&nbsp;&nbsp;as well as the Public Agency Risk Management Association (PARMA).
                </p>
                <div className="overlap">
                    <p className="p">
                        Training is key to the success of all risk management and loss prevention programs. DRMS offers customized
                        training depending on the unique challenges faced by each client.
                    </p>
                    <p className="text-wrapper-5">
                        DRMS’s duty is to guide its’ clients in advancing a well thought out strategic plan to identify, control,
                        develop and implement solid loss prevention measures.
                    </p>
                </div>
                <p className="text-wrapper-6">
                    DRMS holds that the path of success is achieved by a trifecta of communication, consensus, and accountability
                </p>
            </div>
        </div>
    );
};
