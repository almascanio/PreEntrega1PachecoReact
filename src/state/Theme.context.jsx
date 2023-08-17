import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const UseThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    return(
            <ThemeContext.Provider 
                value = {{theme: "Dark"}} 
                displayName = "ThemeContext"
            >
                {children}
            </ThemeContext.Provider>

    )
}