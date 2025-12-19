import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-28 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-500/10 to-transparent" />

      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 grid md:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div>
          <span className="text-blue-400 text-sm tracking-widest uppercase">
            Contact
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-4">
            Let’s Build Something Together 🚀
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            I’m open to new opportunities, collaborations, and discussions.
            Feel free to reach out through any of the platforms below.
          </p>

          {/* CTA */}
          <a
            href="mailto:jayaprashanthhiliyana@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600
                       transition px-6 py-3 rounded-lg font-medium"
          >
            <FaEnvelope />
            Send Email
          </a>
        </div>

        {/* Right – Contact Cards */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jaya-prashant-8513ab22b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#232d46] border border-white/10 rounded-xl p-6
                       hover:border-blue-500/40 transition block"
          >
            <FaLinkedinIn className="text-blue-400 text-2xl mb-3" />
            <p className="text-sm text-gray-400">LinkedIn</p>
            <h4 className="font-medium  text-white group-hover:text-blue-400 transition">
              Connect
            </h4>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jayaprashanth20"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#232d46] border border-white/10 rounded-xl p-6
                       hover:border-blue-500/40 transition block"
          >
            <FaGithub className="text-blue-400 text-2xl mb-3" />
            <p className="text-sm text-gray-400">GitHub</p>
            <h4 className="font-medium  text-white group-hover:text-blue-400 transition">
              View Repos
            </h4>
          </a>

          {/* Email */}
          <a
            href="mailto:jayaprashanthhiliyana@gmail.com"
            className="group bg-[#232d46] border border-white/10 rounded-xl p-6
                       hover:border-blue-500/40 transition block"
          >
            <FaEnvelope className="text-blue-400 text-2xl mb-3" />
            <p className="text-sm text-gray-400">Email</p>
            <h4 className="font-medium   text-white break-all group-hover:text-blue-400 transition">
              jayaprashanthhiliyana@gmail.com
            </h4>
          </a>

          {/* Phone */}
          <a
            href="tel:+918431138460"
            className="group bg-[#232d46] border border-white/10 rounded-xl p-6
                       hover:border-blue-500/40 transition block"
          >
            <FaPhoneAlt className="text-blue-400 text-2xl mb-3" />
            <p className="text-sm text-gray-400">Phone</p>
            <h4 className="font-medium text-white group-hover:text-blue-400 transition">
              +91 84311 38460
            </h4>
          </a>

        </div>
      </div>
    </section>
  );
}
