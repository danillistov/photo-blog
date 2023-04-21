const template: string = '/api';

const endpoints = {
  newPhoto: `${template}/posts`,
  allPhotos: `${template}/posts1`,
  photoWithParams: `${template}/posts`,
  updatePhoto: `${template}/posts`,
  deletePhotoById: (id: string) => `${template}/posts/${id}`,
  photoById: (id: string) => `${template}/posts/${id}`,
};

export default endpoints;
