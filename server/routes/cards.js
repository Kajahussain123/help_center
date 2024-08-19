const express = require('express');
const router = express.Router();
const Card = require('../models/Card');
const { v4: uuidv4 } = require('uuid'); 

// Create a new card
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validation
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        const newCard = new Card({
            id: uuidv4(),
            title,
            description
        });

        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        console.error('Error creating card:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a specific card by title
router.get('/:title', async (req, res) => {
    try {
        console.log('Received title:', req.params.title);

        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        console.error('Server error:', error); 
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a card by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Card.deleteOne({ id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Card not found' });
        }
        
        res.status(200).json({ message: 'Card deleted successfully' });
    } catch (error) {
        console.error('Error deleting card:', error); 
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
