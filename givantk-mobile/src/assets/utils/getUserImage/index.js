import { newUserImage } from '../../constants';
import { serverPath } from '../httpService';

const getUserImage = (avatar) =>
  avatar ? `${serverPath + avatar}` : newUserImage;

export default getUserImage;
