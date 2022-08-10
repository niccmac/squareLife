import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import ThemeToggle from "./components/themeToggle";

const LightTheme = {
  pageBackground: "white",
  titleColor: "green",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "black",
  titleColor: "red",
  tagLineColor: "white"
};
const themes = {
  light: LightTheme,
  dark: DarkTheme
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <ThemeToggle setTheme={setTheme} theme={theme} />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login color={themes[theme]} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
