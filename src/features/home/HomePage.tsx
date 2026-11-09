import React from "react";

export default function HomePage() {
  return (
    <section className="flex min-h-[60vh] flex-col justify-center">
      <p className="mb-5 text-sm text-accent">✦ ¡Hola!</p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-accent md:text-6xl">
        Soy tu nombre, desarrollador web.
      </h1>

      <p className="mt-5 max-w-xl text-base leading-7 text-muted md:text-lg">
        Creo experiencias digitales y aplicaciones web.
      </p>

      <a
        href="#/proyectos"
        className="mt-8 w-fit rounded-full border border-border px-5 py-3 text-sm transition hover:border-accent hover:text-accent"
      >
        Ver mis proyectos
      </a>
    </section>
  );
}
