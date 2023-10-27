import React from "react";
import encrypted from "../../Assets/encrypted.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <p>
          <img src={encrypted} alt="encrypted" />
          end-to-end encrypted
        </p>
      </footer>
    </>
  );
};

export default Footer;
