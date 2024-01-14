import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayout from "./components/Layout/HomeLayout";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Phonenumber from './components/Auth/Phonenumber';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<HomeLayout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/phonenumber' element={<Phonenumber/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
