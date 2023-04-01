export interface IPhotoPost {
  _id: string;
  albumId: number;
  title: string;
  author: string;
  url: string;
  thumbnailUrl: string;
  desc?: string;
};
