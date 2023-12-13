import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import RegistrationPage from './component/RegistrationPage';
import './App.css';

function App() {
 return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;