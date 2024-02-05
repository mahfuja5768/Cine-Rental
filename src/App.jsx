import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState([]);
  return (
    <ThemeContext.Provider value={{ darkMode, setCardData }}>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
