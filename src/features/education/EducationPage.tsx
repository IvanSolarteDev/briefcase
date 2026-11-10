import educationData from "../../data/education.json";

export default function EducationPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-accent md:text-4xl">
        Estudios
      </h1>
      <div className="mt-5 space-y-5">
        {educationData.education.map((education) => (
          <article
            key={`${education.institution}-${education.degree}`}
            className="rounded-2xl border border-border p-5"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {education.degree}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {education.institution} · {education.location}
            </p>
            <p className="mt-1 text-sm text-muted">{education.endDate}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-10 text-3xl font-semibold text-accent md:text-4xl">
        Idiomas
      </h2>
      <ul className="mt-4 space-y-3">
        {educationData.languages.map((language) => (
          <li
            key={language.name}
            className="rounded-2xl border border-border p-4 text-sm"
          >
            <span className="font-semibold text-foreground">
              {language.name}:
            </span>{" "}
            <span className="text-muted">{language.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
