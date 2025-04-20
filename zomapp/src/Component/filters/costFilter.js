import React from  'react';
import axios from 'axios';

//http://3.17.216.66:4000/filter/4?cuisine=1
const base_url = process.env.REACT_APP_API_URL

const CostFilter = ({mealId,restPerCost}) => {

    const cuisineFilter = async(event)=>{
        let cost = event.target.value.split('-');
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl = ""
        if(event.target.value===""){
            costUrl=`${base_url}/filter/${mealId}`
        }else{
            costUrl=`${base_url}/filter/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }

        try{
            const res = await axios.get(costUrl)
            restPerCost(res.data)
        }catch(err){
            console.log(err)
        }

    }

    return(
        <>
            <center><h3>Cost Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={cuisineFilter}>
                <label className='radio'>
                    <input type="radio" value="" name="cuisine"/>All
                </label>
                <label className='radio'>
                    <input type="radio" value="0-300" name="cuisine"/>0-300
                </label>
                <label className='radio'>
                    <input type="radio" value="301-600" name="cuisine"/>301-600
                </label>
                <label className='radio'>
                    <input type="radio" value="601-900" name="cuisine"/>601-900
                </label>
                <label className='radio'>
                    <input type="radio" value="901-1500" name="cuisine"/>901-1500
                </label>
                <label className='radio'>
                    <input type="radio" value="1501-5000" name="cuisine"/>1501-5000
                </label>
            </div>
        </>
    )
}

export default CostFilter