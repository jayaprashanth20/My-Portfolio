import profileImg from "../assets/profile.jpeg"; // add your image here

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-400 tracking-widest uppercase text-sm mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Jaya <span className="text-blue-500">Prashanth</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Full-Stack Developer & Software Engineer
          </h2>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            I build scalable web applications and clean user interfaces using
            modern technologies. Passionate about problem-solving, system
            design, and delivering impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#Projects"
              className="bg-blue-500 hover:bg-blue-600 transition
                         px-7 py-3 rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="/JAYA PRASHANTH.pdf"
              target="_blank"
              className="border border-white/20 hover:border-blue-400
                         px-7 py-3 rounded-lg font-medium transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Image glow */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl" />

          <img
            src={profileImg}
            alt="Profile"
            className="relative w-72 md:w-80 rounded-2xl
                       border border-white/10 shadow-2xl
                       hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
}
