import profile from "../../data/profile.json";

export default function ContactPage() {
  return (
    <section>
      <h1 className="font-display text-3xl font-semibold text-accent md:text-4xl">
        Contacto
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted">
        ¿Tienes una oportunidad o un proyecto en mente? Puedes contactarme por
        correo, teléfono o LinkedIn.
      </p>

      <div className="mt-8 space-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="group block rounded-2xl border border-border p-5 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <span className="block text-sm text-muted">Correo electrónico</span>
          <span className="mt-1 block font-medium">{profile.email}</span>
        </a>
        <a
          href={`tel:${profile.phone.replaceAll(" ", "")}`}
          className="group block rounded-2xl border border-border p-5 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <span className="block text-sm text-muted">Teléfono</span>
          <span className="mt-1 block font-medium">{profile.phone}</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-border p-5 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <span className="block text-sm text-muted">LinkedIn</span>
          <span className="mt-1 block font-medium">Ver perfil profesional</span>
        </a>
      </div>
    </section>
  );
}
