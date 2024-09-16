import axios from 'axios';
import { useSelector } from 'react-redux';
const apiUrl = process.env.REACT_APP_SERVER_API_URL; // לוודא שכתובת השרת מוגדרת ב-ENV

export const sendMessage = async (token, messageData) => {
    try {
        
        const response = await axios.post(`${apiUrl}/messages/send`, messageData, {
            headers: {
                'x-access-token': token, // שולח את ה-Token בכותרת
                'Content-Type': 'application/json',
            },
        });
        return response.data; // מחזיר את ה-Response מהשרת אם הצליח
    } catch (error) {
        console.error('Failed to send message:', error);
        throw error; // זורק את השגיאה הלאה לטיפול
    }
};

export const getMessagesBetweenUsers = async (token, userId, friendId) => {
    try {
        const response = await axios.get(`${apiUrl}/messages/conversation/${userId}/${friendId}`, {
            headers: {
                'x-access-token': token, // שולח את ה-Token בכותרת
                'Content-Type': 'application/json',
            },
        });
        return response.data; // מחזיר את ה-Response מהשרת אם הצליח
    } catch (error) {
        console.error('Failed to get messages:', error);
        throw error; // זורק את השגיאה הלאה לטיפול
    }
};

