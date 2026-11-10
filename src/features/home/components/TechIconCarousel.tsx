const iconModules = import.meta.glob<string>("../../../assets/icon/icon-*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

const excludedIcons = ["icon-index.png", "icon-profile.png"];

const iconLabels: Record<string, string> = {
  angular: "Angular",
  bootstrap: "Bootstrap",
  css: "CSS",
  html: "HTML",
  js: "JavaScript",
  "net-core": ".NET Core",
  node: "Node.js",
  react: "React",
  tailwind: "Tailwind CSS",
  ui: "Diseño UI",
};

const icons = Object.entries(iconModules)
  .filter(([path]) => !excludedIcons.some((icon) => path.endsWith(icon)))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => {
    const fileName = path.split("/").pop()?.replace(/^icon-/, "").replace(/\.png$/, "") ?? "";

    return {
      src,
      label:
        iconLabels[fileName] ??
        fileName.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    };
  });

function IconSet({ decorative = false }: { decorative?: boolean }) {
  return icons.map(({ src, label }) => (
    <span
      key={label}
      className="grid size-14 shrink-0 place-items-center rounded-2xl border border-border bg-skill-card p-3"
      title={label}
    >
      <img
        src={src}
        alt={decorative ? "" : label}
        aria-hidden={decorative}
        className="size-full object-contain"
        loading="lazy"
      />
    </span>
  ));
}

export default function TechIconCarousel() {
  if (icons.length === 0) {
    return null;
  }

  return (
    <div
      className="icon-carousel mx-auto mt-8 w-full overflow-hidden sm:w-1/2"
      role="group"
      aria-label="Tecnologías y herramientas"
    >
      <div className="icon-carousel-track flex w-max items-center gap-3 py-1">
        <div className="flex items-center gap-3">
          <IconSet />
        </div>
        <div className="flex items-center gap-3" aria-hidden="true">
          <IconSet decorative />
        </div>
      </div>
    </div>
  );
}
