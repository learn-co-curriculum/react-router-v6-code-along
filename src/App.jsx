import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import About from './pages/About';
import UserProfile from './pages/UserProfile';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Render Home at root and also support /home path */}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:id' element={<UserProfile />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
