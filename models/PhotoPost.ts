import mongoose from "mongoose";
import type { IPhotoPost } from "../types/photoPost";

const PhotoPost = new mongoose.Schema<IPhotoPost>({
  author: {type: String, required: true},
  albumId: {type: Number, required: true},
  title: {type: String, required: true},
  desc: {type: String, required: false},
  url: {type: String, required: true},
  thumbnailUrl: { type: String, required: true},
});

export default mongoose.model<IPhotoPost>('PhotoPost', PhotoPost);