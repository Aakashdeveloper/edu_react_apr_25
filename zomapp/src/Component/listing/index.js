import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './listing.css';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter'

const base_url = process.env.REACT_APP_API_URL

const Listing = () => {
   let params = useParams();
   let [mealId] = useState(params.mealId);
   const [restaurants,setRestaurants] = useState()

   useEffect(() => {
       sessionStorage.setItem('mealId',mealId)
       axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
       .then((res) => setRestaurants(res.data))
       .catch((err) => console.log(err))

   },[mealId])

   const setDataPerFilter = (data) => {
    setRestaurants(data)
   }

   return(
       <div className='row'>
           <div id='mainListing'>
               <div id="filter">
                   <CuisineFilter mealId={mealId}
                   restPerCuisine={(data) => {setDataPerFilter(data)}}/>
                   <hr/>
                   <CostFilter mealId={mealId}
                   restPerCost={(data) => {setDataPerFilter(data)}}/>
               </div>
               <ListingDisplay listData={restaurants}/>
           </div>
       </div>
   )

}

export default Listing