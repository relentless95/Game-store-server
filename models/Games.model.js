const { Schema, model } = require("mongoose");

const gamesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
    trim: true,
  },
  playtime: {
    type: Number,
    trim: true,
  },
  platforms: [],
  stores: [],
  released: {
    type: String,
  },
  image_url: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    trim: true,
  },
  ratings_count: {
    type: Number,
    trim: true,
  },
  id: {
    type: Number,
    trim: true,
  },
  score: {
    type: Number,
    trim: true,
  },
  tags: [],
  genres: [],
  esrb_rating: {
    type: Object,
  },
});
