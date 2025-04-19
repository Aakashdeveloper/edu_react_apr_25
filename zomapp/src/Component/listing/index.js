import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './listing.css';
import ListingDisplay from './listingDisplay';
import axios from 'axios';

const base_url = process.env.REACT_APP_API_URL

const Listing = () => {
   let params = useParams();
   let [mealId] = useState(params.mealId);
   const [restaurants,setRestaurants] = useState()

   useEffect(() => {
       axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
       .then((res) => setRestaurants(res.data))
       .catch((err) => console.log(err))

   },[mealId])

   return(
       <div className='row'>
           <div id='mainListing'>
               <div id="filter">
                   Filter
               </div>
               <ListingDisplay listData={restaurants}/>
           </div>
       </div>
   )

}

export default Listing