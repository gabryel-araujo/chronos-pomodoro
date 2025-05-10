import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useContext, useEffect, useState } from "react";
import { pageContext } from "../../contexts/PageContext/pageContext";

type avaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<avaliableThemes>(() => {
    const theme = (localStorage.getItem("theme") as avaliableThemes) || "dark";
    return theme;
  });

  const { setPage } = useContext(pageContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleChangeTheme(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const ThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para a home"
        title="Home"
        onClick={(e) => {
          e.preventDefault();
          setPage("main");
        }}
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ver histórico"
        title="Histórico"
        onClick={(e) => {
          e.preventDefault();
          setPage("history");
        }}
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para as configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleChangeTheme}
      >
        {ThemeIcon[theme]}
      </a>
    </nav>
  );
}
