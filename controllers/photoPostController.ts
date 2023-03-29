import type { Request, Response } from "express";
import PhotoPostService from "../services/photoPostService";

class PhotoPostController {
  async create(req: Request, res: Response) {
    try {
      const post = await PhotoPostService.createPhotoPost(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
      throw new Error('[photoPostController/create]');
    }
  }

  async getAll(req: Request, res: Response) {
      try {
          const allPosts = await PhotoPostService.getAllPhotoPosts();
          return res.json(allPosts);
      } catch (error) {
          res.status(500).json(error);
          throw new Error('[photoPostController/getAll]');
      }
  }
}


export default new PhotoPostController();