import { Route, Routes } from 'react-router-dom';
import AboutPage from '../features/about/pages/AboutPage';
import CertificateDetailPage from '../features/certificates/pages/CertificateDetailPage';
import CertificatesPage from '../features/certificates/pages/CertificatesPage';
import ContactPage from '../features/contact/pages/ContactPage';
import CreativeDetailPage from '../features/creative/pages/CreativeDetailPage';
import CreativePage from '../features/creative/pages/CreativePage';
import HomePage from '../features/home/pages/HomePage';
import NotFoundPage from '../features/home/pages/NotFoundPage';
import PortfolioDetailPage from '../features/portfolio/pages/PortfolioDetailPage';
import PortfolioPage from '../features/portfolio/pages/PortfolioPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
      <Route path="/creative" element={<CreativePage />} />
      <Route path="/creative/:slug" element={<CreativeDetailPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/certificates/:slug" element={<CertificateDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
