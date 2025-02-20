require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const upload = require('./config/multerConfig');
const cloudinary = require('./config/cloudinaryConfig');
const Image = require('./models/ImageModel');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            async (error, result) => {
                if (error) return res.status(500).json({ error: error.message });

                // Save image URL to MongoDB
                const newImage = new Image({ imageUrl: result.secure_url });
                await newImage.save();

                res.json({ success: true, imageUrl: result.secure_url });
            }
        ).end(req.file.buffer); // Upload from memory buffer
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/images', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
