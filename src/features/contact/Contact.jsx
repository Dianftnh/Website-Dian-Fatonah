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
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary transition-colors focus:border-primary';

  return (
    <section id="contact" className="container mx-auto px-6 py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">Mari terhubung</p>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">Kontak</h1>
        <p className="text-text-secondary">Saya terbuka untuk kolaborasi, proyek, atau kesempatan belajar yang relevan.</p>
        <ContactInformation email={contact.email} address={contact.address} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-6 shadow-lg shadow-[#6E3549]/5 sm:p-8"
      >
        <div className="mb-4 text-left">
          <label htmlFor="name" className="mb-2 block font-semibold text-text-primary">
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
          <label htmlFor="email" className="mb-2 block font-semibold text-text-primary">
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
          <label htmlFor="message" className="mb-2 block font-semibold text-text-primary">
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
          className="w-full rounded-xl border border-primary bg-primary py-3 font-semibold text-white shadow-md shadow-primary/15 transition duration-200 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        {status && <p className="mt-4 text-center text-text-secondary">{status}</p>}
      </form>
    </section>
  );
}
