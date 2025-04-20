import React from  'react';
import axios from 'axios';

//http://3.17.216.66:4000/filter/4?cuisine=1
const base_url = process.env.REACT_APP_API_URL

const CuisineFilter = ({mealId,restPerCuisine}) => {

    const cuisineFilter = async(event)=>{
        let cuisineId = event.target.value;
        let cuisineUrl = ""
        if(cuisineId===""){
            cuisineUrl=`${base_url}/filter/${mealId}`
        }else{
            cuisineUrl=`${base_url}/filter/${mealId}?cuisine=${cuisineId}`
        }

        try{
            const res = await axios.get(cuisineUrl)
            restPerCuisine(res.data)
        }catch(err){
            console.log(err)
        }

    }

    return(
        <>
            <center><h3>Cuisine Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={cuisineFilter}>
                <label className='radio'>
                    <input type="radio" value="" name="cuisine"/>All
                </label>
                <label className='radio'>
                    <input type="radio" value="1" name="cuisine"/>North Indain
                </label>
                <label className='radio'>
                    <input type="radio" value="2" name="cuisine"/>South Indian
                </label>
                <label className='radio'>
                    <input type="radio" value="3" name="cuisine"/>Chinese
                </label>
                <label className='radio'>
                    <input type="radio" value="4" name="cuisine"/>Fast Food
                </label>
                <label className='radio'>
                    <input type="radio" value="5" name="cuisine"/>Street Food
                </label>
            </div>
        </>
    )
}

export default CuisineFilter