import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/static/Home";
import Navbar from "./components/navigation/Navbar";
import Login from "./components/sessions/Login";
import Logout from "./components/sessions/Logout";
import Signup from "./components/sessions/Signup";

function App() {

  
  return (

    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/signup" element={ <Signup /> } />
      </Routes>
    </Router>

  );
}

export default App;
