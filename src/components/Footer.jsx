import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <div> DJ SeanGeezy</div>
          <div>   All rights reserved </div>
        </h5>
      </div>
    </>
  );
}

export default Footer;
