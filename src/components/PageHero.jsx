import React from "react";
import logo from "./../images/seangeezy.png";
import twitch from "./../images/twitch.png";
import facebook from "./../images/facebook-icon.webp";
import instagram from "./../images/Instagram-2-128.webp";
import twitter from "./../images/Twitter-2-128.webp";


function PageHero() {
  return (
    <>
      <div className="page-hero">
        <img className="page-hero-logo" src={logo} alt="logo" />
        <div className="social-icons">
          <a href="https://www.facebook.com/djseangeezy">
            <img id="facebook-icon" src={facebook} alt="twitch" />
          </a>
          <a href="https://twitter.com/iamseangeezy">
            <img id="twitter-icon" src={twitter} alt="twitch" />
          </a>
          <a href="https://www.instagram.com/sean_geezydj">
            <img id="instagram-icon" src={instagram} alt="twitch" />
          </a>
          <a href="https://www.twitch.tv/djseangeezy">
            <img id="twitch-icon" src={twitch} alt="twitch" />
          </a>
        </div>
        <br />
        <div>
          <h3>
            Phone: (262) 372-2034 <br />
            Email: seangeezydj@gmail.com
          </h3>
        </div>
      </div>
    </>
  );
}

export default PageHero;
