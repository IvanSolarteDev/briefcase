import { useEffect, useState } from "react";
import cvPdf from "../../assets/doc/CV.pdf";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import Link from "../ui/Link";

type Theme = "dark" | "light";

export default function Header() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 py-2">
      <nav
        aria-label="Navegación principal"
        className="flex flex-wrap items-center gap-1"
      >
        <Link to="/" end>
          Inicio
        </Link>
        <Link to="/proyectos">
          Proyectos
        </Link>
        <Link to="/perfil">
          Perfil
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <IconButton
          aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
          title={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
          onClick={toggleTheme}
          icon={
            theme === "dark" ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="size-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="size-5"
              >
                <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
              </svg>
            )
          }
        />
        <Button
          onClick={() => {
            const downloadLink = document.createElement("a");
            downloadLink.href = cvPdf;
            downloadLink.download = "CV.pdf";
            downloadLink.click();
          }}
        >
          Descargar CV
        </Button>
      </div>
    </header>
  );
}
