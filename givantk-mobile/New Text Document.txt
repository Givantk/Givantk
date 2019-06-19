import capitalize from '../helpers/capitalize';
import { unsplashApiKey } from '../keys.ignore';

const apiUrl = (imgThemes) => {
  if (imgThemes.length === 0) {
    return `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&w=${
      window.innerWidth
    }&h=${window.innerHeight}`;
  } else {
    const randomIndex = Math.floor(Math.random() * imgThemes.length);
    const randomImgTheme = imgThemes[randomIndex];

    return `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&w=${
      window.innerWidth
    }&h=${window.innerHeight}&query=${randomImgTheme}`;
  }
};

const publicApiUrl = (imgThemes) => {
  if (imgThemes.length === 0) {
    return `https://source.unsplash.com/random/${window.innerWidth}x${
      window.innerHeight
    }`;
  } else {
    const randomIndex = Math.floor(Math.random() * imgThemes.length);
    const randomImgTheme = imgThemes[randomIndex];

    return `https://source.unsplash.com/random/${window.innerWidth}x${
      window.innerHeight
    }/?${randomImgTheme}`;
  }
};

const getBackgroundImageInfo = (imgThemes) => {
  return new Promise((resolve, reject) => {
    fetch(apiUrl(imgThemes))
      .then((res) => res.json())
      .then((data) => {
        if (data.errors && data.errors.length > 0) {
          reject(data.errors[0]);
        }
        resolve({
          img: data.urls.custom,
          description: data.description || capitalize(data.alt_description),
          link: data.links.html,
          location:
            (data.location && (data.location.title || data.location.name)) ||
            (data.user && capitalize(data.user.location)),
          artist: data.user && capitalize(data.user.name),
          artistAvatar:
            data.user &&
            data.user.profile_image &&
            data.user.profile_image.small
        });
      })
      .catch((err) => {
        resolve({
          img: publicApiUrl(imgThemes)
        });
      });
  });
};

export default getBackgroundImageInfo;
