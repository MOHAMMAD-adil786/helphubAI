const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
const User = require('../models/User');
const HelpRequest = require('../models/HelpRequest');

const demoUsers = [
  {
    name: 'Ayesha Khan',
    email: 'ayesha@helphub.ai',
    role: 'Both',
    location: 'Karachi',
    skills: ['Figma', 'UI/UX', 'HTML/CSS', 'Career Guidance'],
    trustScore: 100,
    contributions: 35,
    badges: ['Design Ally', 'Fast Responder', 'Top Mentor']
  },
  {
    name: 'Hassan Ali',
    email: 'hassan@helphub.ai',
    role: 'Can Help',
    location: 'Karachi',
    skills: ['JavaScript', 'React', 'Git/GitHub'],
    trustScore: 88,
    contributions: 24,
    badges: ['Code Rescuer', 'Bug Hunter']
  },
  {
    name: 'Sara Noor',
    email: 'sara@helphub.ai',
    role: 'Need Help',
    location: 'Karachi',
    skills: ['Python', 'Data Analysis'],
    trustScore: 74,
    contributions: 11,
    badges: ['Community Voice']
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await User.deleteMany({});
    await HelpRequest.deleteMany({});

    const createdUsers = await User.insertMany(demoUsers);
    console.log('Demo users inserted!');

    // Create a mock request from Sara
    await HelpRequest.create({
      title: 'Need help making my portfolio responsive before demo day',
      description: 'My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.',
      category: 'Web Development',
      urgency: 'High',
      status: 'Open',
      tags: ['HTML/CSS', 'Responsive', 'Portfolio'],
      requester: createdUsers[2]._id, // Sara
      helpersInterested: [createdUsers[0]._id] // Ayesha interested
    });

    console.log('Initial help requests seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
