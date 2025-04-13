import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './main';
import Home from './Home';
const NotFound = () =>  <h1>404-Page Not Found</h1>

const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
           
        <Footer/>
        </BrowserRouter>
    )

}


export default Routing