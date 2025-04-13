import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';
const NotFound = () =>  <h1>404-Page Not Found</h1>


const Routing = () => {
    return(
       <BrowserRouter>
       <Header/>
       <Routes>
           <Route path="/" element={<Main/>}>
               <Route index element={<Home/>}/>
               <Route path="post" element={<Post/>}/>
               <Route path="post/:topic" element={<PostDetails/>}/>
               <Route path="profile" element={<Profile/>}/>
               {/* Catch all routes for 404 */}
               <Route path="*" element={<NotFound/>}/>
           </Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
    )
}
export default Routing