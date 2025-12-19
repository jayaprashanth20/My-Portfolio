const projects = [
  {
    title: "AgriConnect",
    desc: "Smart agriculture platform enabling plant disease detection, crop insights, and government scheme awareness for farmers.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Deep Learning"],
  },
  {
    title: "Quiz Web App",
    desc: "Interactive quiz application with real-time score tracking, session-based results, and smooth user experience.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Hostel Management System",
    desc: "Digital platform to manage hostel rooms, students, and reports with role-based access.",
    tech: ["React", "Django", "MySQL", "Bootstrap"],
  },


  {
    title: "User Management System",
    desc: "Secure authentication system with JWT-based login, role-permission management, account lockout, and login audit tracking.",
    tech: ["FastAPI", "JWT", "PostgreSQL", "SQLAlchemy", "Argon2id"],
  },
  {
    title: "Job Scheduler System",
    desc: "Backend system to schedule, manage, and execute jobs with configurable steps and scheduling rules.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Scheduler"],
  },
  {
    title: "Workflow Management System",
    desc: "Configurable workflow engine supporting multi-step approvals, delegation, and validation rules.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Workflow Engine"],
  },
];


export default function Projects() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background title */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[10rem] font-extrabold text-white/5 select-none">
        PROJECTS
      </h1>

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 tracking-widest text-sm uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A selection of projects showcasing my skills in full-stack
            development, problem-solving, and modern UI design.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-2xl p-8 transition-all duration-300
                         hover:-translate-y-3 hover:border-blue-500/40
                         hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full
                               bg-blue-500/10 text-blue-400
                               border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
