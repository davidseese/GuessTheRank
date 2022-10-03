import './index.css';
import Home from './Components/Home';
import Play from "./Components/Play";
import Settings from "./Components/Settings";
import Error from './Components/Error';
import Submit from './Components/Submit';
import Submitted from './Components/Submitted';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthContextProvider } from './Context/AuthContext';
import OnevOneMode from './Components/OnevOneMode';

export default function App() {
  
  return (
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<LogIn/>}></Route>
            
            <Route path='/play' element={
            <ProtectedRoute><Play/></ProtectedRoute>}></Route>
            
            <Route path='/submit' element={<Submit/>}></Route>
            <Route path='/submitted' element={<Submitted/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            {/* <Route path='/test' element={<OnevOneMode/>}></Route> */}
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </AuthContextProvider>
      </Router>
  );
}

