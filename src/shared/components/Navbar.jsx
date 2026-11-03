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

const linkBaseClass =
  'rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary-soft hover:text-primary';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="rounded-lg text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-primary md:text-xl">
          Dian Fatonah
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Menu utama">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBaseClass} ${isActive ? 'bg-primary-soft text-primary' : 'text-text-secondary'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="flex h-10 w-10 flex-col items-center justify-center rounded-full border border-border bg-white transition-colors hover:border-primary hover:bg-primary-soft md:hidden"
        >
          <span
            className={`my-1 block h-[2px] w-5 bg-text-primary transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`my-1 block h-[2px] w-5 bg-text-primary transition-transform duration-300 ${
              isOpen ? 'scale-0' : ''
            }`}
          />
          <span
            className={`my-1 block h-[2px] w-5 bg-text-primary transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 pb-5 pt-3 shadow-lg md:hidden" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBaseClass} ${isActive ? 'bg-primary-soft text-primary' : 'text-text-secondary'}`
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
