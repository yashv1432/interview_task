import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import CustomNavbar from './components/layouts/CustomNavbar';

function App() {
  return (
    <div>
      <Router>
        <CustomNavbar />
        <div className="container my-5">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/:id" element={<DetailPage />} />
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
