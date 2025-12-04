// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Inicio', emoji: '🏠' },
    { path: '/offer', label: 'Ofertas', emoji: '🚨' },
    { path: '/trips', label: 'Viajes', emoji: '🌍' },
    { path: '/about', label: 'Nosotros', emoji: '🙋' },
    { path: '/contact', label: 'Contacto', emoji: '☎️' },
  ];

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        // Al abrir
        menuRef.current.style.height = 'auto';
        const { scrollHeight } = menuRef.current;
        menuRef.current.style.height = '0px';
        // Trigger reflow
        menuRef.current.offsetHeight;
        menuRef.current.style.height = `${scrollHeight}px`;
      } else {
        // Al cerrar
        const { scrollHeight } = menuRef.current;
        menuRef.current.style.height = `${scrollHeight}px`;
        // Trigger reflow
        menuRef.current.offsetHeight;
        menuRef.current.style.height = '0px';
      }
    }
  }, [isMenuOpen]);

  // Eliminamos las funciones handleTransitionStart y handleTransitionEnd
  // y el manejo manual de display

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md">
      <div className="px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <span className="text-orange-200">✈️</span>
          <span>TurismoApp</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-white/20 font-semibold'
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú desplegable con transición suave de altura */}
      {/* Eliminamos style={{ display: ... }} y los handlers de transición */}
      <div
        ref={menuRef}
        className="md:hidden bg-orange-600/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out"
        // El display ahora se maneja solo por la altura y overflow-hidden
      >
        <div className="px-4 py-2 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 rounded-lg transition-colors flex items-center ${
                isActive(item.path)
                  ? 'bg-white/20 font-semibold'
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-3 text-lg">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}