import { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

// Ganti xxxx dengan Form ID kamu dari https://formspree.io (buat form baru lalu salin ID-nya)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeadraj';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatus('Mengirim pesan...');

    try {
      const payload = new FormData();
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('message', form.message);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Formspree gagal');
      }

      setStatus('Terima kasih! Pesan kamu sudah terkirim. 🎉');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus('Gagal mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    'w-full border border-slate-300 p-3 rounded-md text-slate-900 placeholder:text-slate-400';

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Kontak</h2>
        <p className="text-slate-600">Hubungi saya melalui form berikut:</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-navy p-6 rounded-xl shadow-md"
      >
        <div className="mb-4 text-left text-white">
          <label htmlFor="name" className="block font-semibold mb-2">
            Nama
          </label>
          <input
            id="name"
            type="text"
            className={inputClass}
            placeholder="Masukkan nama"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 text-left text-white">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="Masukkan email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 text-left text-white">
          <label htmlFor="message" className="block font-semibold mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            rows="5"
            className={inputClass}
            placeholder="Tulis pesanmu..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-lavender-100 text-navy font-semibold py-3 rounded-lg hover:bg-accent hover:text-white transition duration-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        {status && <p className="mt-4 text-center text-slate-200">{status}</p>}
      </form>
    </section>
  );
}
