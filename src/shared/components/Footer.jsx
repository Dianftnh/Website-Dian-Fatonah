import SocialIcons from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-black/10 py-8">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-600">
          Copyright &copy; {year} Dian Fatonah. All rights reserved.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
