import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const getAllTruths = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/truths`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch truths:", error);
        throw error;
    }
};

export const getAllDares = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/dares`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch dares:", error);
        throw error;
    }
}