import { createContext,  useState } from "react";

export const ThemeContext = createContext({
    
    handlechange: () => { },
    
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)
    
    const handlechange = () => {

        setTheme(true);
    }
   
    return (<ThemeContext.Provider value={{ theme, handlechange }}>
        {children}
    </ThemeContext.Provider>);

};
 

