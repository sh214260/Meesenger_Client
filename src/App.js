import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Counter from './Componnets/Counter';
import counterSlice from './features/counterSlice';
import userSlice from './features/userSlice';
import messagesSlice from './features/messagesSlice';
import groupSlice from './features/groupSlice';
import Login from './Componnets/Login';
import SignUp from './Componnets/SignUp';
import Messages from './Componnets/Messages';
import myStore from './store/store';
import Contacts from './Componnets/Contacts';
import AppRouter from './routes/AppRouters';
// const myStore = configureStore({
//   reducer: {
//     counterSlice,
//     userSlice,
//     messagesSlice,
//     groupSlice  
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(saveUserToLocalStorage), 
// })

function App() {
  return (
    <Provider store={myStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;
