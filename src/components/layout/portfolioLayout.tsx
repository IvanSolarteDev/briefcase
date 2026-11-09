import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Theme = 'dark' | 'light'

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm transition-colors ${
    isActive
      ? 'border border-border text-foreground'
      : 'text-muted hover:text-foreground'
  }`

export default function PortfolioLayout() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-background p-4 font-sans text-foreground transition-colors duration-300 md:p-6">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
        <aside className="rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
          <div className="flex h-full flex-col">
            <div>
              <div className="mb-5 grid size-32 place-items-center rounded-2xl bg-accent text-4xl text-accent-foreground">
                Foto
              </div>

              <h2 className="text-xl font-semibold tracking-tight">
                Tu nombre
              </h2>
              <p className="mt-1 text-sm text-muted">Tu profesión</p>

              <p className="mt-8 text-xs uppercase tracking-widest text-muted-subtle">
                Ubicación
              </p>
              <p className="mt-2 text-sm text-muted">Tu ciudad, país</p>
            </div>

            <div className="mt-auto flex gap-3 pt-8 text-sm text-muted">
              <a href="https://github.com/" className="hover:text-foreground">
                GitHub
              </a>
              <a href="https://linkedin.com/" className="hover:text-foreground">
                LinkedIn
              </a>
              <a href="mailto:tu-correo@ejemplo.com" className="hover:text-foreground">
                Email
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="flex flex-wrap items-center justify-between gap-4 py-2">
            <nav
              aria-label="Navegación principal"
              className="flex flex-wrap items-center gap-1"
            >
              <NavLink to="/" end className={navClass}>
                Inicio
              </NavLink>
              <NavLink to="/proyectos" className={navClass}>
                Proyectos
              </NavLink>
              <NavLink to="/perfil" className={navClass}>
                Perfil
              </NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                title={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors duration-300 hover:bg-surface"
              >
                {theme === 'dark' ? (
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
                )}
              </button>

              <a
                href="/cv.pdf"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors duration-300 hover:opacity-80"
              >
                Descargar CV
              </a>
            </div>
          </header>

          <main className="mt-8 min-h-[70vh] rounded-3xl border border-border bg-surface-raised p-6 transition-colors duration-300 md:mt-10 md:p-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
