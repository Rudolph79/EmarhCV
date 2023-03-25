import './App.css';
import 'antd/dist/reset.css';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
