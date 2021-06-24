import React from "react";
import {createContext} from 'react';

type themess = {
  light:light
  dark : dark
}

type light =  {
  color: string,
  background: string
}
type dark = {
  color: string,
  background: string
}
type Context ={
  theme: themess["light"] | themess["dark"],
  setTheme: React.Dispatch<React.SetStateAction< dark | light >>
}

export const themes: themess = {
  light: {
    color: "black",
    background : "#ADD8E6"
  },
  dark: {
    color: "white",
    background: " #424242"
  }
}


const context: Context = {
  theme: themes.dark,
  setTheme: () => {},
}

const ThemeContext = createContext(context);

export default ThemeContext;
