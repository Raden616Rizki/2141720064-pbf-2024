import { ThemeContext } from "@/utilities/context/mycontext";
import { themes } from "@/utilities/themes/mythemes";
import { useState } from "react";
import Navbar from "./navbar";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from '@/redux/store/store';

export default function MyApp({ Component, pageProps}: {Component: any, pageProps: any}) {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
        </Provider>
    )
}