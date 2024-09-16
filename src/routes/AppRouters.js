import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from '../Componnets/SignUp';
import Login from '../Componnets/Login'
import Counter from '../Componnets/Counter'
import Messages from "../Componnets/Messages"
import Contacts from "../Componnets/Contacts"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* נתיבים לעמודים השונים */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/messages" element={<Messages freind={null} />} />
        <Route path="/contacts" element={<Contacts />} />
        
        {/* ניתן להוסיף עמוד ברירת מחדל במקרה של נתיב לא חוקי */}
        <Route path="*" element={<Login />} /> {/* ניתוב לעמוד ברירת מחדל */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
