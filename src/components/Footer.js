import React from "react";
import '../styles/Footer.css';

//use font awesome icons for linkedIn and Email...figure out what email icon will do
//hyperlink your github
export default function Footer () {
    return (
        <div className="footer">
            <div className="div">
                <div className="text-wrapper">CONTACT</div>
                <p className="diversity-risk">
                    Diversity Risk Management, Inc
                    <br />
                    1911 Douglas Boulevard, Suite 85-430, Roseville, CA 95661
                </p>
                <div className="text-wrapper-2">530 784-4151</div>
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="text-wrapper-3">SOCIAL</div>
                        <img className="letter" alt="Letter" src="letter.png" />
                    </div>
                    <img className="linked-in" alt="Linked in" src="linked-in.png" />
                </div>
                <p className="p">webpage built with love, by github.com/beasaddress</p>
            </div>
        </div>
    );
};
