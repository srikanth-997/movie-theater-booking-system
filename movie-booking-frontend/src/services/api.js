import axios from 'axios';

const API_BASE_URL = '/api'; 

const api = {
  initializeTheater: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/initialize`);
      return response.data;
    } catch (error) {
      console.error('Initialize error:', error);
      throw error;
    }
  },

  getAllSeats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/seats`);
      return response.data;
    } catch (error) {
      console.error('Get seats error:', error);
      throw error;
    }
  },

  bookSeats: async (seatIds, userName) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/book`, {
        seatIds,
        userName
      });
      return response.data;
    } catch (error) {
      console.error('Booking error:', error);
      throw error;
    }
  },

  resetTheater: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reset`);
      return response.data;
    } catch (error) {
      console.error('Reset error:', error);
      throw error;
    }
  }
};

export default api;