export default function PortfolioCard({ project }) {
  const links = project.links || [];
  const linkItems = (project.items || []).filter((item) => item.href);
  const bullets = (project.items || []).filter((item) => !item.href);

  return (
    <div className="min-w-[320px] max-w-[320px] sm:min-w-[400px] sm:max-w-[400px] flex-shrink-0 snap-start bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col h-full">
      <div
        className={`w-full h-52 overflow-hidden ${
          project.images.length > 1 ? 'flex gap-1' : ''
        }`}
      >
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`h-full object-cover hover:scale-105 transition duration-500 ${
              project.images.length > 1 ? 'w-1/2 flex-1' : 'w-full'
            }`}
          />
        ))}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="self-start bg-lavender-100 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-primary mb-1">
          {project.title} <span className="text-dark">{project.subtitle}</span>
        </h3>
        {project.name && (
          <p className="text-sm font-semibold text-navy mb-2">
            {project.name}
          </p>
        )}
        <div className="text-secondary text-left mb-4 max-h-28 overflow-y-auto scrollbar-thin pr-1">
          <p>{project.description}</p>
        </div>

        {bullets.length > 0 && (
          <ul className="list-disc list-inside text-secondary mb-4 space-y-1 text-sm">
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet.label}</li>
            ))}
          </ul>
        )}

        {(links.length > 0 || linkItems.length > 0) && (
          <div className="mt-auto pt-2 flex flex-wrap gap-2">
            {[...linkItems, ...links].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-lavender-100 text-accent text-sm font-medium px-4 py-2 rounded-lg hover:bg-lavender-200 hover:shadow-md hover:-translate-y-0.5 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
