import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './Components/App/App';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Logedpage from './Components/Logedpage/Logedpage';
import Details from './Components/Details/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Routes>
        <Route path='/App' element={<App/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Logedpage' element={<Logedpage/>}/>
        <Route path='/Deails' element={<Details/>}/>
        
        
    </Routes></BrowserRouter>);


const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: YOUR_API_KEY,
  apiSecret: YOUR_API_SECRET
});


2
3
4
5
6
7
8
9
10
11
nexmo.message.sendSms(
  YOUR_VIRTUAL_NUMBER, '7824965584', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
 