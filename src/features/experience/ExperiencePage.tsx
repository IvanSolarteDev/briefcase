import Badge from "../../components/ui/Badge";
import experiences from "../../data/experience.json";

type ActivityIconName =
  | "home"
  | "commerce"
  | "finance"
  | "health"
  | "mobility"
  | "code";

const activityIcons: Record<string, ActivityIconName> = {
  "Home Power": "home",
  "Grupo MOK": "commerce",
  "Appinit (antes DIBANKA S.A.S.)": "finance",
  "CJT & T": "health",
  SIIAN: "health",
  "Movilidad Sostenible Ltda.": "mobility",
  "Nova Sistemas Ltda.": "commerce",
  "SIIEM S.A.S.": "code",
};

function ActivityIcon({ name }: { name: ActivityIconName }) {
  const paths: Record<ActivityIconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
        <path d="M17 3v4" />
      </>
    ),
    commerce: (
      <>
        <path d="M3 8h18l-2 12H5L3 8Z" />
        <path d="m8 8 4-5 4 5M9 12v4m6-4v4" />
      </>
    ),
    finance: (
      <>
        <path d="m3 9 9-6 9 6" />
        <path d="M4 10h16M5 10v8m5-8v8m4-8v8m5-8v8M3 20h18" />
      </>
    ),
    health: (
      <>
        <path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z" />
        <path d="M9 12h6m-3-3v6" />
      </>
    ),
    mobility: (
      <>
        <path d="m5 11 1.5-5h11l1.5 5" />
        <path d="M3 11h18v7H3zM6 18v2m12-2v2M6 14h.01M18 14h.01" />
      </>
    ),
    code: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8m-4-4v4m-5-9 2-2-2-2m6 4 2-2-2-2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-display text-3xl font-semibold text-accent md:text-4xl">
        Experiencia profesional
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        Explora cada experiencia para conocer los proyectos, responsabilidades
        y tecnologías que formaron parte de mi trabajo.
      </p>

      <div className="mt-8 space-y-3">
        {experiences.map((experience) => {
          const activityIcon = activityIcons[experience.company] ?? "code";

          return (
            <details
              key={`${experience.company}-${experience.startDate}`}
              className="group overflow-hidden rounded-2xl border border-border bg-skill-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md open:border-accent/50 open:shadow-md motion-reduce:transition-none"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 outline-none transition-colors hover:bg-accent/5 focus-visible:ring-2 focus-visible:ring-accent sm:px-5 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {experience.company}
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                    <ActivityIcon name={activityIcon} />
                  </span>
                  <span
                    className="text-sm text-muted transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </span>
              </summary>

              <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
                <p className="font-medium text-foreground">{experience.role}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                  <span>
                    {experience.startDate} – {experience.endDate}
                  </span>
                  {experience.location && <span>{experience.location}</span>}
                  {experience.industry && (
                    <span className="md:hidden">{experience.industry}</span>
                  )}
                  {experience.team && <span>{experience.team}</span>}
                </div>

                <h3 className="mt-5 text-sm font-semibold text-foreground">
                  Responsabilidades y proyectos
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-5 text-sm font-semibold text-foreground">
                  Tecnologías
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge>{technology}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
