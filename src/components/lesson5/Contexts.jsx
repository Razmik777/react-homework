import React, { createContext, useState } from 'react';

export const UserContext = createContext()
export const ThemeContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('Гость');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('светлая');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};