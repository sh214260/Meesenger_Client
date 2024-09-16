import axios from "axios";
const apiUrl = process.env.REACT_APP_SERVER_API_URL;

const loginUser = async (email, password)=>{
    console.log(apiUrl);   
    try {
        const response = await axios.post(`${apiUrl}/users/login`, {
            email,
            password,
        });
        return response.data; // מחזיר את ה-JSON שהתקבל מהשרת
    } catch (error) {
        console.error('Login failed:', error);
    }
}

const signUpUser = async (email, password, name) => {
    console.log(apiUrl);  // לוודא שה-URL נשלף נכון
    try {
        const response = await axios.post(`${apiUrl}/users/signup`, {
            email,
            password,
            name,
        });
        return response.data; // מחזיר את ה-JSON שהתקבל מהשרת
    } catch (error) {
        console.error('Sign up failed:', error);
        return { success: false, message: 'Sign up failed' };
    }
};

export const getUserContacts = async (token, userId) => {
    try {
        const response = await axios.get(`${apiUrl}/users/${userId}/contacts`, {
            headers: {
                'x-access-token': token, // שולח את ה-Token בכותרת
                'Content-Type': 'application/json',
            },
        });
        return response.data.contacts; // מחזיר את רשימת אנשי הקשר מהשרת
    } catch (error) {
        console.error('Failed to fetch user contacts:', error);
        throw error; // זורק את השגיאה הלאה כדי לטפל בה בקומפוננטה
    }
};

export {loginUser, signUpUser}