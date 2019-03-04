import { newUserImage } from '../../constants';

const getUserImage = (avatar) =>
  avatar ? `${avatar}` : newUserImage;

export default getUserImage;
