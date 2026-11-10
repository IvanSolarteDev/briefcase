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
          className="block rounded-2xl border border-border p-5 text-foreground transition-colors hover:border-accent"
        >
          <span className="block text-sm text-muted">Correo electrónico</span>
          <span className="mt-1 block font-medium">{profile.email}</span>
        </a>
        <a
          href={`tel:${profile.phone.replaceAll(" ", "")}`}
          className="block rounded-2xl border border-border p-5 text-foreground transition-colors hover:border-accent"
        >
          <span className="block text-sm text-muted">Teléfono</span>
          <span className="mt-1 block font-medium">{profile.phone}</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-border p-5 text-foreground transition-colors hover:border-accent"
        >
          <span className="block text-sm text-muted">LinkedIn</span>
          <span className="mt-1 block font-medium">Ver perfil profesional</span>
        </a>
      </div>
    </section>
  );
}
