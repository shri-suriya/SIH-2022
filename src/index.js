import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './Components/App/App';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Weather from './Components/Weather/Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>
        <Route path='/App' element={<App/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Weather' element={<Weather/>}/>
    </Routes></BrowserRouter>);


