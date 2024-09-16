import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import { login,logout } from '../features/userSlice';
import counterSlice from '../features/counterSlice';
const saveUserToLocalStorage = store => next => action => {
    console.log(userSlice);
    
    if (login.match(action)) {
        localStorage.setItem('user', JSON.stringify(action.payload));
    }
    if (logout.match(action)) {
        localStorage.removeItem('user');
    }
    return next(action);
};

const myStore = configureStore({
    reducer: {
        userSlice,
        counterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saveUserToLocalStorage),
});

export default myStore;
