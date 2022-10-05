import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__site-name">Twitter</div>
      <div className="footer__creator-name">Zhenya Goroh</div>
      <div className="footer__email"><a href="email:zhenyagoroh@gamil.com">zhenyagoroh@gamil.com</a></div>
      <div className="footer__date">{new Date().toLocaleDateString()}</div>
    </footer>
  );
}

export default Footer;
