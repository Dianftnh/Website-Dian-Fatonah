import projectsData from '../../../data/projects.json';
import { resolveImage } from '../../../shared/utils/resolveImage';

const withResolvedImages = (project) => ({
	...project,
	thumbnail: resolveImage(project.thumbnail, 'projects'),
	gallery: Array.isArray(project.gallery)
		? project.gallery.map((item) => resolveImage(item, 'projects'))
		: [],
});

export const projects = projectsData.map(withResolvedImages);

export const getProjects = () => projects;

export const getFeaturedProjects = (limit = 3) =>
	projects.filter((project) => project.featured).slice(0, limit);

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
