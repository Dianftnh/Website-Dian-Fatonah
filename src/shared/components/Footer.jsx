import SocialIcons from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/70 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-text-secondary">
          Copyright &copy; {year} Dian Fatonah. Seluruh hak cipta dilindungi undang-undang.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
