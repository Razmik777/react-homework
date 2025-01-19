import React, { useContext } from "react";
import { UserContext } from "./Contexts";

const Header = () => {
    const { username } = useContext(UserContext)
    return (
        <header>
            <h1>Привет, {username}</h1>
        </header>
    )
};

export default Header;