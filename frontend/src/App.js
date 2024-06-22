import './App.css';
import Form from './components/Form.js'
import Home from './components/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/:formType" element={<Form />} />
      </Routes>
    </Router>
  );
}

