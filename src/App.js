import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
