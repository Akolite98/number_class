const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { classifyNumber, getFunFact } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query;

    // Input validation
    if (!number || isNaN(number)) {
        return res.status(400).json({
            number: number || "undefined",
            error: true,
        });
    }

    const num = parseInt(number, 10);

    try {
        // Get number properties
        const properties = classifyNumber(num);

        // Fetch fun fact from Numbers API
        const funFact = await getFunFact(num);

        // Send response
        res.status(200).json({
            number: num,
            is_prime: properties.isPrime,
            is_perfect: properties.isPerfect,
            properties: properties.properties,
            digit_sum: properties.digitSum,
            fun_fact: funFact,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});