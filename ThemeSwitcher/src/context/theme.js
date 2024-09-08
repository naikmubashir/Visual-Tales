import {createContext, useContext} from 'react'

//context
export const ThemeContext = createContext(
    {
        themeMode:'light',
        darkTheme: ()=>{},
        lightTheme:()=>{}
    }
);

//provider
export const ThemeProvider = ThemeContext.Provider;


//custom hook
export default function useTheme(){
    return useContext(ThemeContext);
} 