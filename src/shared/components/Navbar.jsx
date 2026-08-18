import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/creative', label: 'Kreatif' },
  { to: '/certificates', label: 'Sertifikat' },
  { to: '/contact', label: 'Kontak' },
];

const linkBaseClass = 'text-sm font-medium text-text-secondary transition-colors hover:text-text-primary';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-white/95">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold text-text-primary">
          Dian Fatonah
        </Link>

        <nav className="hidden items-center space-x-6 md:flex" aria-label="Menu utama">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBaseClass} ${isActive ? 'border-b-2 border-primary pb-1 text-primary' : 'border-b-2 border-transparent pb-1'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={handleToggle}
          className="flex h-8 w-8 flex-col items-center justify-center md:hidden"
        >
          <span
            className={`my-1 block h-[2px] w-[30px] bg-text-primary transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`my-1 block h-[2px] w-[30px] bg-text-primary transition-transform duration-300 ${
              isOpen ? 'scale-0' : ''
            }`}
          />
          <span
            className={`my-1 block h-[2px] w-[30px] bg-text-primary transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col space-y-3 border-t border-border px-6 pb-4 pt-4 md:hidden" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBaseClass} ${isActive ? 'text-primary' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
