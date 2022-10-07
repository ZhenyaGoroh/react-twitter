import React from "react";
import s from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__site_name}>Twitter</div>
      <div className={s.footer__creator_name}>Zhenya Goroh</div>
      <div className={s.footer__email}><a href="email:zhenyagoroh@gamil.com">zhenyagoroh@gamil.com</a></div>
      <div className={s.footer__date}>{new Date().toLocaleDateString()}</div>
    </footer>
  );
}

export default Footer;
