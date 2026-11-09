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
├── App.tsx
├── App.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PortfolioLayout.tsx
│   └── ui/
│       ├── Button.tsx
│       └── SectionTitle.tsx
├── features/
│   ├── home/
│   │   └── HomePage.tsx
│   ├── profile/
│   │   └── ProfilePage.tsx
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
│   ├── icons/
│   └── icon/
│       └── icon-index.png
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

## Diseño de la página principal

La página de inicio tendrá un diseño oscuro con una barra lateral para la información personal y un área principal para la presentación profesional.

```text
┌────────────────────┬─────────────────────────────────────────────────────────────┐
│                    │ Estudios  Experiencia  Habilidades  Inicio  ES  Tema  [CV] │
│   [Foto o avatar]  ├─────────────────────────────────────────────────────────────┤
│                    │                                                             │
│   Tu nombre        │   ✦ ¡Hola!                                                  │
│   Tu profesión     │                                                             │
│                    │   Soy [Tu nombre],                                        │
│   Ubicación        │   [tu profesión o especialidad].                           │
│                    │                                                             │
│   Breve descripción│   [Ver mis proyectos]    [Contactarme]                     │
│                    │                                           ↓ Desplázate      │
│   ○ GitHub         │                                                             │
│   ○ LinkedIn       │                                                             │
│   ○ Email          │                                                             │
└────────────────────┴─────────────────────────────────────────────────────────────┘
```

### Componentes de la página

- **Barra lateral:** foto o avatar, nombre, profesión, ubicación, breve presentación y enlaces a GitHub, LinkedIn y correo.
- **Navegación superior:** enlaces a Inicio, Estudios, Experiencia y Habilidades; selector de idioma y tema, y botón para descargar el CV.
- **Presentación principal:** saludo, nombre, especialidad y botones para ver proyectos o contactar.
- **Estilo visual:** fondo oscuro, texto claro y acentos suaves, con elementos decorativos discretos.
- **Diseño adaptable:** en pantallas pequeñas, la barra lateral se convierte en una sección compacta o menú para aprovechar mejor el espacio.

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
