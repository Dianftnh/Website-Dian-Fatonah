import SocialIcons from '../../shared/components/SocialIcons';
import SectionHeading from '../../shared/components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="pt-10 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="TENTANG SAYA"
          subtitle="Saya adalah seorang mahasiswa dari Program Studi Teknik Informatika di Universitas Lampung dengan minat di bidang analisis data dan kecerdasan buatan. Selain itu, saya juga mampu melakukan pengeditan video, penulisan konten, dan sebagai pembuat konten. Saya siap berkontribusi dan mengembangkan keterampilan saya dalam tim dan proyek yang melibatkan analisis data untuk mengambil keputusan yang lebih baik."
        />

        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
            Yuk, Kenal Lebih Jauh!
          </h3>
          <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
            Mari Kunjungi Sosial Media Milik Saya.
          </p>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
