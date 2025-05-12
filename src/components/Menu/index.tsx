import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";

type avaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<avaliableThemes>(() => {
    const theme = (localStorage.getItem("theme") as avaliableThemes) || "dark";
    return theme;
  });

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
      <Link
        to="/"
        className={styles.menuLink}
        aria-label="Ir para a home"
        title="Home"
      >
        <HouseIcon />
      </Link>
      <Link
        to="/history"
        className={styles.menuLink}
        aria-label="Ver histórico"
        title="Histórico"
      >
        <HistoryIcon />
      </Link>
      <Link
        to="/config"
        className={styles.menuLink}
        aria-label="Ir para as configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </Link>
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
