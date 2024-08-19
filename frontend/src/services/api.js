import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

// Function to create a new card
export const createCard = async (cardData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/cards`, cardData);
        return response.data;
    } catch (error) {
        console.error('Error creating card:', error);
        throw error;
    }
};

// Function to get all cards
export const getAllCards = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

// Function to get a card by title
export const getCardByTitle = async (title) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cards/${title}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching card by title:', error);
        throw error;
    }
};
