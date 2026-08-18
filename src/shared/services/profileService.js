import profileData from '../../data/profile.json';
import { resolveImage } from '../utils/resolveImage';

export const getProfile = () => ({
  ...profileData,
  profileImage: resolveImage(profileData.profileImage, 'profile'),
});

export const getSocialLinks = () => profileData.socialLinks;

export const getContactInfo = () => profileData.contact;
