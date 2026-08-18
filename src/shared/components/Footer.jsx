import SocialIcons from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-soft-surface py-8">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-secondary">
          Copyright &copy; {year} Dian Fatonah. Seluruh hak cipta dilindungi undang-undang.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
