import axios from "axios";
const apiUrl = process.env.REACT_APP_SERVER_API_URL;

const loginUser = async (email, password) => {
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
const getUserContacts = async (token, userId) => {
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
        throw error;
    }
};


export const addContact = async (token, userId, emailFriend) => {
    try {
        const response = await axios.post(
            `${apiUrl}/users/${userId}/contacts`,
            { emailFriend },
            {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data; // מחזיר את התגובה מהשרת אם הצליח
    } catch (error) {
        console.error("Failed to add contact:", error);
        throw error; // זורק את השגיאה הלאה לטיפול
    }
};


export { loginUser, signUpUser, getUserContacts }