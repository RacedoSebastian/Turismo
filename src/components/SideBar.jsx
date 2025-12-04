import { Link, useLocation } from 'react-router-dom';

const sections = [
  { title: "", emoji: "🏠", label: "home" },
  { title: "about", emoji: "🙋", label: "about" },
  { title: "trips", emoji: "🌍", label: "trips" },
  { title: "offer", emoji: "🚨", label: "offer" },
  { title: "contact", emoji: "☎️", label: "contact" },
];

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname === "/" ? "" : location.pathname.slice(1);

  return (
    <nav
      className="bg-orange-500/10 p-3 flex flex-row md:flex-row gap-4 md:gap-6 items-center justify-center w-full max-w-xs md:max-w-md rounded-full md:rounded-xl backdrop-blur-sm border border-white/10 fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      aria-label="Navegación principal"
    >
      {sections.map((item) => {
        const isActive = item.title === currentPath;
        return (
          <Link
            key={item.title}
            to={`/${item.title}`}
            className={`text-2xl md:text-3xl transition-all duration-300 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full ${
              isActive
                ? "scale-125 text-white drop-shadow-md bg-orange-600/30"
                : "text-orange-300 hover:text-white hover:bg-orange-600/20"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Ir a sección ${item.label}`}
          >
            {item.emoji}
          </Link>
        );
      })}
    </nav>
  );
};

export default SideBar;