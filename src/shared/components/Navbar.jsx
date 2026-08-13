import { useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#portofolio', label: 'Portofolio' },
  { href: '#prestasi', label: 'Prestasi' },
  { href: '#contact', label: 'Kontak' },
];

const linkClass = 'text-white hover:text-indigo-200 transition duration-300';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-navy/80 backdrop-blur-md border-b border-white/10 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 text-xl font-semibold text-white">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1f4068] to-[#16a085] text-white flex items-center justify-center font-bold font-poppins">
            DF
          </span>
          Dian Fatonah
        </a>

        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={handleToggle}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        >
          <span
            className={`w-[30px] h-[2px] my-1 block bg-slate-100 transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`w-[30px] h-[2px] my-1 block bg-slate-100 transition-transform duration-300 ${
              isOpen ? 'scale-0' : ''
            }`}
          />
          <span
            className={`w-[30px] h-[2px] my-1 block bg-slate-100 transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col space-y-3 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
