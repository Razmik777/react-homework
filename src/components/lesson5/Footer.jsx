import React, { useContext } from "react";
import { ThemeContext } from "./Contexts";

const Footer = () => {

  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{background: theme === "светлая" ? "#f1f1f1" : "#222", color: theme === "светлая" ? "#000" : "#fff"}}>
        <p>{currentYear} Ваш сайт</p>

    </footer>
  )
};

export default Footer;
