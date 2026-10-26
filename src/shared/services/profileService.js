import profileData from '../../data/profile.json';
import { resolveImage } from '../utils/resolveImage';

export const getProfile = () => ({
  ...profileData,
  profileImage: resolveImage(profileData.profileImage, 'profile'),
});

export const getSocialLinks = () =>
  (profileData.socialLinks ?? []).map((social) => ({
    ...social,
    href: social.href ?? social.url,
  }));

export const getContactInfo = () => profileData.contact;
