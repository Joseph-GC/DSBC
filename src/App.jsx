import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {

  return (
      
    <BrowserRouter basename="/DSBC"> {/* Add basename to handle the subdirectory */}
      <Routes>
        <Route path="/" element={<Login />} />     {/* Login page */}
        <Route path="/home" element={<Home />} />  {/* Home page */}
        <Route path="/register" element={<Register />} />  {/* register page */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
