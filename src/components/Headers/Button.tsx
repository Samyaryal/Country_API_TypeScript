import React, { useContext} from "react";
import ThemeContext, { themes } from '../Context/ThemeContext';



const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleContext = () => { theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)}; 
  
  return (
    <div>
      <button className = "button" 
      onClick = {toggleContext}>Theme Change</button>
    </div>
  )
}

export default Button; 