import skillsData from '../../../data/skills.json';
import { getFeaturedCertificates } from '../../certificates/services/certificatesService';
import { getFeaturedCreativeWorks } from '../../creative/services/creativeService';
import { getFeaturedProjects } from '../../portfolio/services/projectsService';

export const getHomeSkills = () => skillsData;

export const getHomeData = () => ({
  featuredProjects: getFeaturedProjects(3),
  featuredCertificates: getFeaturedCertificates(3),
  featuredCreative: getFeaturedCreativeWorks(3),
  skills: getHomeSkills(),
});
