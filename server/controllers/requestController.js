const HelpRequest = require('../models/HelpRequest');
const User = require('../models/User');
const mongoose = require('mongoose');

exports.createRequest = async (req, res) => {
  try {
    const { title, description, category, urgency, tags, requesterId } = req.body;
    
    const request = new HelpRequest({
      title,
      description,
      category,
      urgency,
      tags,
      requester: requesterId
    });

    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllRequests = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database not connected', requests: [] });
    }

    const { category, urgency } = req.query;
    let query = {};
    if (category && category !== 'All categories') query.category = category;
    if (urgency && urgency !== 'All urgency levels') query.urgency = urgency;

    const requests = await HelpRequest.find(query).populate('requester', 'name location');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.solveRequest = async (req, res) => {
  try {
    const request = await HelpRequest.findByIdAndUpdate(req.params.id, { status: 'Solved' }, { new: true });
    
    // Logic to boost trust score for helpers can be added here
    
    res.json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
