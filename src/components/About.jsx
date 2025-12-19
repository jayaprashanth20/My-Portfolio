export default function About() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-500/10 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left – Title */}
        <div>
          <span className="text-sm tracking-widest text-blue-400 uppercase">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Building <span className="text-blue-500">Digital Products</span>
            <br /> with Code & Creativity
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I’m a passionate Computer Science Engineer and Full-Stack Developer
            who enjoys transforming ideas into scalable, user-friendly
            applications. I focus on writing clean, maintainable code while
            crafting smooth and engaging user experiences.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            With experience across modern web technologies, I continuously
            explore new tools and frameworks to stay updated and deliver
            impactful solutions.
          </p>
        </div>

        {/* Right – Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-6">
            What I Do
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400">▹</span>
              Build scalable full-stack web applications
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">▹</span>
              Design modern, responsive, and interactive UIs
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">▹</span>
              Develop secure backends and REST APIs
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">▹</span>
              Continuously learn and adapt to new technologies
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
