const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Need Help', 'Can Help', 'Both'], default: 'Both' },
  location: { type: String, default: 'Karachi' },
  skills: [String],
  interests: [String],
  trustScore: { type: Number, default: 100 },
  contributions: { type: Number, default: 0 },
  badges: [String],
  avatar: { type: String }, // Placeholder or gravatar
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
