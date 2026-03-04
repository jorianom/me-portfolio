const experiences = [
  {
    company: "Siigo",
    role: "Desarrollador Full Stack",
    period: "03/2021 – Actual",
    achievements: [
      "Automatización de procesos de negocio mediante scripts en JavaScript sobre el ERP Oracle NetSuite, orientados a la mejora de la gestión de la información, reducción de carga operativa y fortalecimiento de la trazabilidad y consistencia de datos.",
      "Diseño e implementación de servicios web (APIs REST) utilizando tecnologías como .NET, Go y Node.js, facilitando la integración entre distintos sistemas de información y la consolidación de datos provenientes de múltiples fuentes.",
      "Gestión y mantenimiento de bases de datos relacionales y no relacionales, apoyando procesos de consulta, actualización y análisis de información para la generación de reportes y soporte a la toma de decisiones.",
      "Participación en procesos de mejora continua del ciclo de desarrollo de software, aplicando control de versiones con Git y apoyando la automatización de despliegues, garantizando la estabilidad, mantenibilidad y disponibilidad de los sistemas.",
      "Elaboración y documentación de requerimientos funcionales y no funcionales, así como de procesos técnicos, asegurando la correcta alineación entre las necesidades organizacionales y las soluciones implementadas.",
    ],
  },
] as const;

export const Experience = () => {
  return (
    <section className="py-16 border-t border-white/5" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: heading */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-black text-white">
            Trayectoria Profesional
          </h2>
          <p className="text-sm text-slate-400 mt-4">
            Foco en resultados técnicos y soluciones de integración empresarial.
          </p>
        </div>

        {/* Right: timeline */}
        <div className="lg:col-span-8">
          <div className="relative pl-8 border-l border-primary/30 flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative">
                {/* Dot */}
                <div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />

                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-xs text-primary font-mono uppercase mb-1">
                  {exp.role}
                </p>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-4">
                  {exp.period}
                </p>

                <ul className="flex flex-col gap-4 text-sm text-slate-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-0.5 shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
