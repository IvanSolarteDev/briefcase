import TechIconCarousel from "./components/TechIconCarousel";

export default function HomePage() {
  return (
    <section className="flex min-h-[60vh] flex-col justify-center">
      <p className="mb-5 text-sm text-accent">✦ ¡Hola!</p>

      <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-accent md:text-6xl">
        Soy Ivan Solarte, desarrollador de software.
      </h1>

      <a
        href="#/proyectos"
        className="mt-8 w-fit rounded-full border border-border px-5 py-3 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
      >
        Ver mis proyectos
      </a>
      <TechIconCarousel />
      <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
        Ingeniero de Sistemas y desarrollador de software con más de 7 años de
        experiencia en frontend y backend, creando aplicaciones web y móviles
        para fintech, comercio y energía. Convierto retos de negocio en
        soluciones escalables con Angular, React y Node.js.
      </p>
    </section>
  );
}
