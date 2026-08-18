const labels = {
  latarBelakang: 'Latar belakang',
  ide: 'Ide',
  tujuan: 'Tujuan',
  target: 'Target audiens',
  permasalahan: 'Permasalahan',
  pendekatan: 'Pendekatan',
  konsepVisual: 'Konsep visual',
  proses: 'Proses',
  solusi: 'Solusi',
  implementasi: 'Implementasi',
  tantangan: 'Tantangan',
  hasil: 'Hasil',
  pembelajaran: 'Pembelajaran',
};

export function ConceptArticle({ concept }) {
  const entries = Object.entries(concept || {}).filter(([, value]) => value && !Array.isArray(value));

  if (!entries.length) return null;

  return (
    <section className="rounded-2xl border border-border bg-white p-6">
      <h2 className="text-2xl font-bold text-text-primary">Konsep Project</h2>
      <div className="mt-6 space-y-5 leading-relaxed text-text-secondary">
        {entries.map(([key, value]) => (
          <div key={key}>
            <h3 className="text-lg font-semibold text-text-primary">{labels[key] || key}</h3>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
