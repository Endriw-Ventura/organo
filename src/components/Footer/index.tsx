import "./Footer.css";
import React from "react";
interface FooterProps{
  srcLogo: string,
  srcFBIcon: string,
  srcIGIcon: string,
  srcTWIcon: string,
  altLogo: string,
  altFBIcon: string,
  altIGIcon: string,
  altTWIcon: string,
  text: string
}

function Footer({ srcLogo, srcFBIcon, srcIGIcon, srcTWIcon, altLogo, altFBIcon, altIGIcon, altTWIcon, text }: FooterProps) {
  return (
    <div className="footer">
      <div className="icons">
        <img src={srcFBIcon} alt={altFBIcon} />
        <img src={srcIGIcon} alt={altIGIcon} />
        <img src={srcTWIcon} alt={altTWIcon} />
      </div>
      <div>
        <img src={srcLogo} alt={altLogo} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Footer;
