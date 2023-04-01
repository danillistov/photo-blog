import PhotoPost from '../models/PhotoPost';
import { IPhotoPost } from '../types/photoPost';

class PhotoPostService {
  async createPhotoPost(photoPost: IPhotoPost) {
    const createdPost = await PhotoPost.create(photoPost);
    return createdPost;
  }

  async getAllPhotoPosts() {
    const posts = await PhotoPost.find();
    return posts;
  }

  async getPhotoPostById(id: string) {
    if (!id) {
      throw new Error('Request error: ID not specified');
    }

    const post = await PhotoPost.findById(id);
    return post;
  }

  async updatePhotoPostById(photoPost: IPhotoPost) {
    const { _id: id } = photoPost;

    if (!id) {
      throw new Error('Request error: ID not specified');
    }

    const updatedPost = await PhotoPost.findByIdAndUpdate(id, photoPost, {
      new: true,
    });
    return updatedPost;
  }

  async deletePhotoPostById(id: string) {
    if (!id) {
      throw new Error('Request error: ID not specified');
    }

    const deletedPost = await PhotoPost.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PhotoPostService();
