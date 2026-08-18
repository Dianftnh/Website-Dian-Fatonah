import { getSocialLinks } from '../services/profileService';

const iconClass =
  'mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:border-primary hover:bg-primary-soft hover:text-primary';

export default function SocialIcons({ className = '' }) {
  const socials = getSocialLinks();

  return (
    <div className={`flex items-center justify-center space-x-5 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          className={iconClass}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
        >
          <span className="text-xs font-bold" aria-hidden="true">{social.name.slice(0, 1)}</span>
        </a>
      ))}
    </div>
  );
}
