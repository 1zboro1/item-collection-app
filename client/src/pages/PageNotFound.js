import React from "react";
import useLocalStorage from "use-local-storage";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

export default function PageNotFound() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const pageTheme =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";
  return (
    <div className={pageTheme} style={{ minHeight: "100vh" }}>
      <Header theme={theme} click={switchTheme} />
      <h1 className="text-center" style={{ marginTop: "150px" }}>
        Ups... page not found
      </h1>
    </div>
  );
}
