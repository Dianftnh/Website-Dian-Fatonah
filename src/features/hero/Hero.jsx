import { useState } from 'react';
import profileImg from '../../shared/assets/img/profile-nobg.png';
import { generatePortfolioPDF } from '../../shared/utils/generatePortfolioPDF';

const downloadPortfolioClass =
  'bg-gradient-to-r from-[#1f4068] to-[#16a085] text-white px-6 py-3 rounded-[30px] font-semibold shadow-lg hover:shadow-[0_4px_15px_rgba(22,160,133,0.4)] hover:-translate-y-[3px] transition-transform duration-300 disabled:cursor-not-allowed disabled:opacity-60';

const CENTER = 250;
const OUTER_COUNT = 16;
const R_OUTER = 242;
const R_INNER = 168;

const OUTER_NODES = (() => {
  const nodes = [];
  for (let i = 0; i < OUTER_COUNT; i++) {
    const angle = (i / OUTER_COUNT) * 2 * Math.PI - Math.PI / 2;
    nodes.push({ x: CENTER + R_OUTER * Math.cos(angle), y: CENTER + R_OUTER * Math.sin(angle) });
  }
  return nodes;
})();

const INNER_NODES = (() => {
  const nodes = [];
  for (let i = 0; i < OUTER_COUNT; i++) {
    const angle = (i / OUTER_COUNT) * 2 * Math.PI - Math.PI / 2 + Math.PI / OUTER_COUNT;
    nodes.push({ x: CENTER + R_INNER * Math.cos(angle), y: CENTER + R_INNER * Math.sin(angle) });
  }
  return nodes;
})();

function GlowLine({ x1, y1, x2, y2, haloOpacity = 0.12, lineOpacity = 0.5 }) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#93c5fd"
        strokeWidth="5"
        strokeLinecap="round"
        opacity={haloOpacity}
      />
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#818cf8"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity={lineOpacity}
      />
    </g>
  );
}

function NeuralNetwork({ className }) {
  const ringEdges = [];
  const starEdges = [];
  const squareEdges = [];
  const crossEdges = [];
  for (let i = 0; i < OUTER_COUNT; i++) {
    ringEdges.push([i, (i + 1) % OUTER_COUNT]);
    starEdges.push([i, (i + 8) % OUTER_COUNT]);
    squareEdges.push([i, (i + 4) % OUTER_COUNT]);
    crossEdges.push([i, i]);
  }
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g>
        {ringEdges.map(([a, b], i) => (
          <GlowLine
            key={`ring-${i}`}
            x1={OUTER_NODES[a].x}
            y1={OUTER_NODES[a].y}
            x2={OUTER_NODES[b].x}
            y2={OUTER_NODES[b].y}
          />
        ))}
        {squareEdges.map(([a, b], i) => (
          <GlowLine
            key={`square-${i}`}
            x1={OUTER_NODES[a].x}
            y1={OUTER_NODES[a].y}
            x2={OUTER_NODES[b].x}
            y2={OUTER_NODES[b].y}
            haloOpacity={0.08}
            lineOpacity={0.35}
          />
        ))}
        {starEdges.map(([a, b], i) => (
          <GlowLine
            key={`star-${i}`}
            x1={OUTER_NODES[a].x}
            y1={OUTER_NODES[a].y}
            x2={OUTER_NODES[b].x}
            y2={OUTER_NODES[b].y}
            haloOpacity={0.08}
            lineOpacity={0.35}
          />
        ))}
        {crossEdges.map(([a, b], i) => (
          <GlowLine
            key={`cross-${i}`}
            x1={OUTER_NODES[a].x}
            y1={OUTER_NODES[a].y}
            x2={INNER_NODES[b].x}
            y2={INNER_NODES[b].y}
            haloOpacity={0.06}
            lineOpacity={0.25}
          />
        ))}
      </g>
      <g fill="#93c5fd">
        {OUTER_NODES.map((n, i) => (
          <circle key={`outer-${i}`} cx={n.x} cy={n.y} r="4.5" />
        ))}
        {INNER_NODES.map((n, i) => (
          <circle key={`inner-${i}`} cx={n.x} cy={n.y} r="3" opacity="0.8" />
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownloadPortfolio = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setErrorMessage('');
    try {
      await generatePortfolioPDF();
    } catch (err) {
      console.error(err);
      setErrorMessage('Gagal membuat portfolio. Silakan coba lagi.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="home" className="pt-24 pb-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6">
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-poppins whitespace-nowrap">
            Halo, Saya Dian Fatonah
          </h1>
          <h2 className="text-xl text-slate-700 mb-6">
            <span className="text-slate-600 font-semibold">
              Teknik Informatika | Data Analyst & AI Enthusiast
            </span>
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Calon Lulusan Teknik Informatika, Universitas Lampung dengan pengalaman di{' '}
            <span className="font-semibold">
              data analysis, natural language processing, machine learning, UI/UX, AR, dan content creation
            </span>
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Motto saya:{' '}
            <span className="font-bold text-slate-900">
              Learning by experience & learning by doing
            </span>
            .
          </p>
          <div className="flex flex-wrap space-x-4">
            <button
              type="button"
              onClick={handleDownloadPortfolio}
              disabled={isGenerating}
              className={downloadPortfolioClass}
            >
              {isGenerating ? 'Menyiapkan Portofolio...' : 'Unduh Portofolio'}
            </button>
          </div>
          {errorMessage && (
            <p role="alert" className="text-sm text-red-600 mt-4">
              {errorMessage}
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-[360px] h-[380px] md:w-[400px] md:h-[420px] flex items-center justify-center">
            <NeuralNetwork className="absolute inset-0 w-full h-full opacity-80" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border-2 border-indigo-300/60 shadow-inner" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-2xl" />
              <img
                src={profileImg}
                alt="Foto Profil Dian Fatonah"
                className="relative w-[320px] md:w-[380px] aspect-square object-cover object-center rounded-full shadow-lg ring-2 ring-indigo-300/40 scale-[1.4] md:scale-[2] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
