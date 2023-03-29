import mongoose from "mongoose";

const PhotoPost = new mongoose.Schema({
  id: { type: 'number', required: true },
  author: {type: 'string', required: true},
  albumId: {type: 'number', required: true},
  title: {type: 'string', required: true},
  desc: {type: 'string', required: false},
  url: {type: 'string', required: true},
  thumbnailUrl: { type: 'string', required: true},
});

export default mongoose.model('PhotoPost', PhotoPost);