import { createContext, useContext, useState, useEffect} from "react";
import { themes } from "../themes/mythemes";

export const levelContext = createContext(0);

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const usePersistedTheme = () => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(JSON.parse(storedTheme));
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    return { theme, toggleTheme };
};