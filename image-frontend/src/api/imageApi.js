import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Upload image
export const uploadImage = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

// Fetch images
export const getImages = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/images`);
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
