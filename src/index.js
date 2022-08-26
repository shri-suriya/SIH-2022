import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './Components/App/App';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Logedpage from './Components/Logedpage/Logedpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>
        <Route path='/App' element={<App/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Logedpage' element={<Logedpage/>}/>
        
        
    </Routes></BrowserRouter>);


