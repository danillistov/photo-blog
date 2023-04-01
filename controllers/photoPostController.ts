import type { Request, Response } from 'express';
import PhotoPostService from '../services/photoPostService';

class PhotoPostController {
  async create(req: Request, res: Response) {
    try {
      const post = await PhotoPostService.createPhotoPost(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
      throw new Error('[photoPostController/create]', { cause: error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allPosts = await PhotoPostService.getAllPhotoPosts();
      return res.json(allPosts);
    } catch (error) {
      res.status(500).json(error);
      throw new Error('[photoPostController/getAll]', { cause: error });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const post = await PhotoPostService.getPhotoPostById(id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
      throw new Error('[photoPostController/getById]', { cause: error });
    }
  }

  async updateById(req: Request, res: Response) {
    try {
      const post = await PhotoPostService.updatePhotoPostById(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
      throw new Error('[photoPostController/updateById]');
    }
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const post = await PhotoPostService.deletePhotoPostById(id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
      throw new Error('[photoPostController/deleteById]');
    }
  }
}

export default new PhotoPostController();
