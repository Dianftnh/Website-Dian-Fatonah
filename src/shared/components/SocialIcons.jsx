import { socials } from '../data/socials';

const iconClass =
  'w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 text-slate-400 hover:bg-accent hover:text-white hover:border-accent active:bg-accent-dark active:text-white active:border-accent-dark transition duration-300';

export default function SocialIcons({ className = '' }) {
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
          <svg
            width="20px"
            className="fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{social.name}</title>
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
