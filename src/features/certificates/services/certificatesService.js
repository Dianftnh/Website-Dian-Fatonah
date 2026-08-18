import certificatesData from '../../../data/certificates.json';
import { resolveImage } from '../../../shared/utils/resolveImage';

const withResolvedImages = (certificate) => ({
	...certificate,
	image: resolveImage(certificate.image, 'certificates'),
});

export const certificates = certificatesData.map(withResolvedImages);

export const getCertificates = () => certificates;

export const getFeaturedCertificates = (limit = 3) =>
	certificates.filter((certificate) => certificate.featured).slice(0, limit);

export const getCertificateBySlug = (slug) => certificates.find((certificate) => certificate.slug === slug);
