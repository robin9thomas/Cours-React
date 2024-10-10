import { createContext, useState } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
            {children}
        </DarkThemeContext.Provider>
    );
};

module.exports = { DarkThemeContext, DarkThemeProvider };