import PhotoPost from '../models/PhotoPost';
import { IPhotoPost } from '../types/photoPost';

class PhotoPostService {
  async createPhotoPost(photoPost: IPhotoPost) {
    const post: IPhotoPost = await PhotoPost.create(photoPost);
    return post;
  }

  async getAllPhotoPosts() {
      const posts: IPhotoPost[] = await PhotoPost.find();
      return posts;
  }
}

export default new PhotoPostService();