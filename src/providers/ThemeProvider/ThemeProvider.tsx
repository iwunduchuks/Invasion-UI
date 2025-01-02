import React, { createContext, useContext } from 'react';

const ThemeContext = createContext<string | undefined>(undefined);

export default function ThemeProvider(props:{
    children: React.ReactNode,
    theme: 'base'|string
}) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);
