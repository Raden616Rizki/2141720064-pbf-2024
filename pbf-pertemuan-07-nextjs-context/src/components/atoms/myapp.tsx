import { ThemeContext, usePersistedTheme } from "@/utilities/context/mycontext";
import Navbar from "./navbar";

export default function MyApp({ Component, pageProps}: {Component: any, pageProps: any}) {
    const {theme, toggleTheme} = usePersistedTheme();

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...theme,
                   }}>
                <Navbar/>
                <Component {...pageProps}/>
            </div>
        </ThemeContext.Provider>
    )
}