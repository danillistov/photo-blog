import PhotoPost from '../models/PhotoPost';
import { IPhotoPost } from '../types/photoPost';

class PhotoPostService {
  async createPhotoPost(photoPost: IPhotoPost) {
    const post = await PhotoPost.create(photoPost);
    return post;
  }

  async getAllPhotoPosts() {
      const posts = await PhotoPost.find();
      return posts;
  }

  async getPhotoPostById(id: number) {
    const post = await PhotoPost.findOne({ id });
    return post;
  }
}

export default new PhotoPostService();