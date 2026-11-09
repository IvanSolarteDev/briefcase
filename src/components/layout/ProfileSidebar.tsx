import profileImage from "../../assets/img/img-perfil.jpeg";
import profileIcon from "../../assets/icon/icon-profile.png";

export default function ProfileSidebar() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-3">
        <img
          src={profileIcon}
          alt=""
          aria-hidden="true"
          className="size-7 shrink-0 object-contain"
        />
        <h2 className="text-lg font-semibold leading-tight tracking-tight">
          Ivan Dario Solarte
        </h2>
      </div>

      <div className="mb-8 flex w-full justify-center">
        <img
          src={profileImage}
          alt="Foto de perfil"
          className="aspect-square w-full max-w-32 rounded-2xl object-cover object-top"
        />
      </div>

      <section>
        <h3 className="text-[10px] font-medium uppercase tracking-wide text-muted-subtle">
          Especialidad
        </h3>
        <p className="mt-1 text-xs font-semibold leading-snug text-foreground">
          Ingeniero de Sistemas | Desarrollador Web/Mobil
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-[10px] font-medium uppercase tracking-wide text-muted-subtle">
          Ubicación
        </h3>
        <p className="mt-1 text-xs font-semibold leading-snug text-foreground">
          Medellin - Colombia
        </p>
      </section>

      <div className="mt-auto flex items-center gap-2 pt-8">
        <a
          href="https://github.com/IvanSolarteDev"
          aria-label="GitHub"
          className="grid size-8 place-items-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-dario-solarte-isacaz-b77b39180"
          aria-label="LinkedIn"
          className="grid size-8 place-items-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-2 3.5-2 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.7V15c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.3V9Z" />
          </svg>
        </a>
        <a
          href="mailto:tu-correo@ejemplo.com"
          aria-label="Correo electrónico"
          className="grid size-8 place-items-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="size-4"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
