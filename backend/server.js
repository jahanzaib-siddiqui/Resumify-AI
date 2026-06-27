const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const resumeRoutes = require('./routes/resumeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/resume', resumeRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB, catch error if local mongo isn't running so the app doesn't crash
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.warn("MongoDB connection failed (mocking DB for testing):", err.message);
    });
}

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
