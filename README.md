# Portafolio profesional

Aplicación web para presentar mi hoja de vida, experiencia, formación, habilidades y proyectos.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Estructura del proyecto

```text
src/
├── app/
│   └── App.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── SectionTitle.tsx
├── features/
│   ├── home/
│   │   └── HomePage.tsx
│   ├── about/
│   │   └── AboutSection.tsx
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   └── ExperienceCard.tsx
│   ├── education/
│   │   └── EducationSection.tsx
│   ├── skills/
│   │   └── SkillsSection.tsx
│   ├── projects/
│   │   ├── ProjectsPage.tsx
│   │   └── ProjectCard.tsx
│   └── contact/
│       └── ContactSection.tsx
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── routes/
│   └── AppRouter.tsx
├── types/
│   └── portfolio.ts
├── assets/
│   ├── images/
│   └── icons/
├── index.css
└── main.tsx
```

### Organización

- `app/`: componente raíz de la aplicación.
- `components/`: componentes reutilizables, como encabezado, pie de página y botones.
- `features/`: páginas y secciones propias del portafolio, agrupadas por funcionalidad.
- `data/`: información que se muestra en las secciones, separada de la presentación.
- `routes/`: configuración de React Router.
- `types/`: tipos de TypeScript compartidos.
- `assets/`: imágenes e íconos del proyecto.
- `index.css`: estilos globales y configuración de Tailwind CSS.

## Instalación y desarrollo

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

Para validar el proyecto:

```bash
pnpm lint
pnpm build
```
