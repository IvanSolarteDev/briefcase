export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-title">
      <h1
        id="projects-title"
        className="text-3xl font-semibold text-accent md:text-4xl"
      >
        Mis proyectos
      </h1>

      <div
        className="mt-8 flex items-center gap-3 text-muted"
        role="status"
        aria-live="polite"
      >
        <svg
          className="size-5 animate-spin text-accent"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M12 3a9 9 0 0 1 9 9h-3a6 6 0 0 0-6-6V3Z"
          />
        </svg>
        
      </div>
    </section>
  );
}
