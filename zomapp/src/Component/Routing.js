import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './main';
import Home from './Home';
import Listing from './listing';
import Details from './Details/details';
import PlaceOrder from './placeOrder/placeOrder';
import ViewOrder from './placeOrder/viewOrder';

const NotFound = () =>  <h1>404-Page Not Found</h1>

const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="listing/:mealId" element={<Listing/>}/>
                    <Route path="details" element={<Details/>}/>
                    <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                    <Route path="viewOrder" element={<ViewOrder/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
           
        <Footer/>
        </BrowserRouter>
    )

}


export default Routing