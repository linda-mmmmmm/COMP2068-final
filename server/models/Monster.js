import mongoose, { Schema } from "mongoose";


const MonsterSchema = new Schema({
  name: String,
  hitPoints: Number,
  skills: Array,
  backgroundStory: String,
  level: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 10, // I've set it to 10 levels in total
  },
});

// Model for the levels, including embedded monsters and their skills
const monster = mongoose.model("monster", MonsterSchema);

export default monster;
