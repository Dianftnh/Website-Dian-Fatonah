//versi baru
import { getProfile } from '../../../shared/services/profileService';

export const getExperiences = () => getProfile().experience ?? [];
