export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 
                    bg-white/70 backdrop-blur-md 
                    border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          JP
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 text-sm font-medium text-gray-700">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative hover:text-blue-600 transition
                           after:content-[''] after:absolute after:left-0
                           after:-bottom-1 after:h-0.5 after:w-0
                           after:bg-blue-600 after:transition-all
                           hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
