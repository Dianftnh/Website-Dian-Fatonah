import { useState } from 'react';
import { ContactInformation } from './components/ContactInformation';
import { FORMSPREE_ENDPOINT, getContactInfo } from './services/contactService';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const contact = getContactInfo();
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

      setStatus('Terima kasih. Pesan Anda sudah terkirim.');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus('Gagal mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    'w-full rounded-lg border border-border p-3 text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none';

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="mb-4 text-3xl font-bold text-text-primary">Kontak</h2>
        <p className="text-text-secondary">Saya terbuka untuk kolaborasi, proyek, atau kesempatan belajar yang relevan.</p>
        <ContactInformation email={contact.email} address={contact.address} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <div className="mb-4 text-left">
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
        <div className="mb-4 text-left">
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
        <div className="mb-4 text-left">
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
          className="w-full rounded-lg border border-primary bg-primary py-3 font-semibold text-white transition duration-200 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        {status && <p className="mt-4 text-center text-text-secondary">{status}</p>}
      </form>
    </section>
  );
}
