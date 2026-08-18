export default function SectionHeading({ title, subtitle, textColor = 'text-text-primary' }) {
  return (
    <div className="max-w-xl mx-auto text-center mb-10">
      <h4 className={`text-3xl font-bold ${textColor} mb-4`}>{title}</h4>
      {subtitle && <p className="text-text-secondary">{subtitle}</p>}
    </div>
  );
}
