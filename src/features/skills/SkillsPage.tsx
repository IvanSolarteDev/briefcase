import skills from "../../data/skills.json";
import Badge from "../../components/ui/Badge";
import angularIcon from "../../assets/icon/icon-angular.png";
import bootstrapIcon from "../../assets/icon/icon-bootstrap.png";
import cssIcon from "../../assets/icon/icon-css.png";
import dotnetIcon from "../../assets/icon/icon-net-core.png";
import nodeIcon from "../../assets/icon/icon-node.png";
import reactIcon from "../../assets/icon/icon-react.png";
import tailwindIcon from "../../assets/icon/icon-tailwind.png";
import uiIcon from "../../assets/icon/icon-ui.png";
import Card from "./components/Card";

const skillGroups = [
  {
    title: "Frontend",
    code: "FE",
    accent: "text-sky-500 bg-sky-500/10 border-sky-500/30",
    items: skills.frontend,
  },
  {
    title: "Backend y frameworks complementarios",
    code: "BE",
    accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
    items: [
      "Symfony",
      "WebSocket",
      "Express.js",
      ".NET Core",
      "Nest.js",
      "Next.js",
      "APIs REST",
    ],
  },
  {
    title: "Bases de datos",
    code: "DB",
    accent: "text-violet-500 bg-violet-500/10 border-violet-500/30",
    items: skills.databases,
  },
  {
    title: "Cloud y DevOps",
    code: "CD",
    accent: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30",
    items: skills.cloudAndDevOps,
  },
  {
    title: "Herramientas",
    code: "TO",
    accent: "text-amber-500 bg-amber-500/10 border-amber-500/30",
    items: skills.tools,
  },
  {
    title: "Pruebas",
    code: "QA",
    accent: "text-rose-500 bg-rose-500/10 border-rose-500/30",
    items: skills.testing,
  },
  {
    title: "Metodologías",
    code: "AG",
    accent: "text-orange-500 bg-orange-500/10 border-orange-500/30",
    items: skills.methodologies,
  },
  {
    title: "IA aplicada al desarrollo",
    code: "IA",
    accent: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/30",
    items: skills.aiForDevelopment,
  },
];

const featuredSkills = [
  {
    title: "Angular",
    icon: angularIcon,
    badgeTone: "angular",
    titleClass: "text-[#dd0031]",
    badges: [
      "Angular 4–21",
      "Signals",
      "RxJS",
      "NgRx",
      "Angular Material",
    ],
    description:
      "He trabajado con Angular desde la versión 4 hasta la 21, creando aplicaciones financieras y corporativas. En Home Power desarrollo la aplicación web para el seguimiento de compras de paneles solares.",
  },
  {
    title: "React",
    icon: reactIcon,
    badgeTone: "react",
    titleClass: "text-[#61dafb]",
    badges: ["TypeScript", "React Native CLI", "React Router", "Zustand"],
    description:
      "He desarrollado aplicaciones financieras para clientes y equipos internos, además de una plataforma de comercio electrónico para viajes con pagos integrados con Wompi.",
  },
  {
    title: "Node.js",
    icon: nodeIcon,
    badgeTone: "node",
    titleClass: "text-[#68a063]",
    badges: ["Nest.js", "Express.js", "APIs REST", "WebSocket"],
    description:
      "He creado y mantenido servicios backend e integraciones para aplicaciones web y móviles. También construí backends de prueba para validar flujos antes de los despliegues a producción.",
  },
  {
    title: ".NET",
    icon: dotnetIcon,
    badgeTone: "dotnet",
    titleClass: "text-[#7952b3]",
    badges: [".NET Core", "APIs", "MySQL"],
    description:
      "He trabajado con .NET en servicios backend para aplicaciones de los sectores financiero y de salud, integrados con bases de datos MySQL.",
  },
  {
    title: "Diseño UI",
    icon: uiIcon,
    badgeTone: "ui",
    titleClass: "text-accent",
    badges: ["Diseño responsivo", "Mobile-first", "Atomic Design", "Figma"],
    description:
      "Creo interfaces responsivas y componentes reutilizables, cuidando la experiencia en distintos tamaños de pantalla y aplicando principios de diseño atómico.",
  },
  {
    title: "CSS",
    icon: cssIcon,
    badgeTone: "css",
    titleClass: "text-[#2965f1]",
    badges: ["CSS3", "SCSS/Sass", "Flexbox", "CSS Grid"],
    description:
      "Uso CSS y Sass para construir y adaptar interfaces, organizando estilos con Flexbox y CSS Grid para lograr layouts responsivos y mantenibles.",
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon,
    badgeTone: "tailwind",
    titleClass: "text-[#38bdf8]",
    badges: ["Diseño responsivo", "Mobile-first", "Interfaces web"],
    description:
      "Lo he utilizado para desarrollar interfaces responsivas en proyectos de energía solar, comercio electrónico y aplicaciones corporativas.",
  },
  {
    title: "Bootstrap",
    icon: bootstrapIcon,
    badgeTone: "bootstrap",
    titleClass: "text-[#7952b3]",
    badges: ["Bootstrap 4", "Componentes UI", "Diseño responsivo"],
    description:
      "Lo he aplicado en interfaces web de los sectores salud, financiero y corporativo, combinándolo con Angular o React según las necesidades del proyecto.",
  },
] as const;

export default function SkillsPage() {
  return (
    <section>
      <h1 className="font-display text-3xl font-semibold text-accent md:text-4xl">
        Conocimientos
      </h1>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {featuredSkills.map((skill) => (
          <Card key={skill.title} skill={skill} />
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-6 border-b border-border pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Más allá de los frameworks
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
            Tecnologías, herramientas y prácticas
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            Conocimientos que complementan mi trabajo en el desarrollo de
            interfaces, servicios backend y soluciones completas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-skill-card p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl border text-xs font-bold tracking-wide ${group.accent}`}
                  aria-hidden="true"
                >
                  {group.code}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">
                    {group.items.length} conocimientos
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
