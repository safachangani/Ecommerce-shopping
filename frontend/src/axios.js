import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000/shopping', // Replace with your API endpoint
  // timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers here
  },
});

export default instance;