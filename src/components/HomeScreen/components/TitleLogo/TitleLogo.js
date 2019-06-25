import React from "react";

import Styles from './TitleLogo.module.css';

export default function TitleLogo() {
  return (
    <img
      alt="App logo"
      className={Styles.TitleLogo}
      src="img/simpsons-logo.png"
    />
  );
}
