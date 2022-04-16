import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  //localStorage'dan ayarı al, yoksa false yani light mode bas
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem("darkTheme") || "light");
  const [colorSVG, setColorSVG] = useState();

  useEffect(() => {
    if (darkTheme === "dark")
    {
      setColorSVG("#FFBF5E");
      localStorage.setItem("darkTheme", "dark");
      console.log("case ", darkTheme);
    }
    else{
      setColorSVG("#444AFF");
      localStorage.setItem("darkTheme", "light");
      console.log("case ", darkTheme);
    }
  }, [darkTheme]);

  const changeTheme = (darkTheme) => {
    if ("dark"){
      document.body.classList.add("dark-content");
    }
    else{
      document.body.classList.remove("dark-content");
    }
  };

  const buttonTheme = () => {
    (darkTheme==="dark") ? setDarkTheme ("light") : setDarkTheme ("dark")
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        buttonTheme,
        setColorSVG,
        darkTheme,
        colorSVG,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
