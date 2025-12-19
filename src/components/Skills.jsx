const skills = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
  },
  {
    title: "Frameworks",
    items: ["FastAPI", "Django", "Node.js (Basic)", "Express.js (Basic)"],
  },
  {
    title: "Databases & Tools",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB (Basic)",
      "Git",
      "GitHub",
      "Alembic",
      "VS Code",
      "PyCharm",
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background Title */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 
                     text-[7rem] md:text-[9rem] font-extrabold 
                     text-white/5 select-none">
        SKILLS
      </h1>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 tracking-widest uppercase text-sm">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A snapshot of the technologies and tools I work with to build
            efficient, scalable, and modern applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-white/5 backdrop-blur-xl 
                         border border-white/10 rounded-2xl p-8
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:border-blue-500/40
                         hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <h3 className="text-xl font-semibold mb-6 
                             group-hover:text-blue-400 transition">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full
                               bg-blue-500/10 text-blue-400
                               border border-blue-500/20
                               hover:bg-blue-500/20 transition"
                  >
                    {item}
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
