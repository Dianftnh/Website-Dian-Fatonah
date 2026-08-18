import creativeData from '../../../data/creative.json';
import { resolveImage } from '../../../shared/utils/resolveImage';

const withResolvedImages = (item) => ({
	...item,
	thumbnail: resolveImage(item.thumbnail, 'creative'),
	gallery: Array.isArray(item.gallery)
		? item.gallery.map((galleryImage) => resolveImage(galleryImage, 'creative'))
		: [],
});

export const creative = creativeData.map(withResolvedImages);

export const getCreativeWorks = () => creative;

export const getFeaturedCreativeWorks = (limit = 3) =>
	creative.filter((item) => item.featured).slice(0, limit);

export const getCreativeBySlug = (slug) => creative.find((item) => item.slug === slug);
