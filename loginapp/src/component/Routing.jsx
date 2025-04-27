import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Outlet from '../Outlet';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import User from './Userlist'

const NotFound = () =>  <h1>404-Page Not Found</h1>


const Routing = () => {
    return(
       <BrowserRouter>
       <Header/>
       <Routes>
           <Route path="/" element={<Outlet/>}>
               <Route index element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/profile" element={<Profile/>}/>
               <Route path="/users" element={<User/>}/>
               <Route path="*" element={<NotFound/>}/>
           </Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
    )
}
export default Routing