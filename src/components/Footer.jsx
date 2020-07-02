import React from "react";
import RequestBtn from "./RequestInvite"
/*Images*/
import Logo from "../images/logo";
// import facebook from "../images/icon-facebook.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
// import Facebook from "../images/icon-facebook";

function Contact(){
    return(
        <div className="foot">
            <div className="logo"><Logo color="#fff" /></div>
            <div className="socialIcons">
                <img src={facebook} alt="facebook"/>
                <img src={youtube} alt="youtube"/>
                <img src={twitter} alt="twitter"/>
                <img src={pinterest} alt="pinterest"/>
                <img src={instagram} alt="instagram"/>
            </div>
            <div className="footer-links">
                <div className="row row1">
                    <div>About Us</div>
                    <div>Careers</div>
                </div>
                <div className="row row2">
                    <div>Contact</div>
                    <div>Support</div>
                </div>
                <div className="row row3">
                    <div>Blog</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
            <div className="request"><RequestBtn /></div>
            <div className="rights">© Easybank. All Rights Reserved</div>
        </div>
    );
}

export default Contact;