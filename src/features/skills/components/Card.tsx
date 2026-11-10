import Badge from "../../../components/ui/Badge";

type SkillCardProps = {
  skill: {
    title: string;
    icon: string;
    titleClass: string;
    badgeTone:
      | "angular"
      | "react"
      | "node"
      | "ui"
      | "css"
      | "tailwind"
      | "bootstrap"
      | "dotnet";
    badges: readonly string[];
    description: string;
  };
};

export default function Card({ skill }: SkillCardProps) {
  return (
    <article
      key={skill.title}
      className="rounded-2xl border border-border bg-skill-card p-5 transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center">
          <img
            src={skill.icon}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 object-contain"
          />
        </span>
        <h2 className={`text-xl font-semibold ${skill.titleClass}`}>
          {skill.title}
        </h2>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skill.badges.map((badge) => (
          <li key={badge}>
            <Badge tone={skill.badgeTone}>{badge}</Badge>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-6 text-muted">{skill.description}</p>
    </article>
  );
}
