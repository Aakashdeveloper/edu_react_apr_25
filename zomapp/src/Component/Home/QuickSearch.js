import {useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const base_url = process.env.REACT_APP_API_URL

const QuickSearch = () => {
    const [mealType,setMealType] = useState([]);

    useEffect(()=>{
        fetch(`${base_url}/quicksearch`,{method:"GET"})
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            setMealType(data)
        })
    },[])

    return(
        <div className='quickSearch'>
            <span id="QuickSearchHeading">
                Quick Search
            </span>
            <span id="QuickSubHeading">
                Find Restaurants By MealType
            </span>
            <div>
                <QuickDisplay mealData={mealType}/>
            </div>
           
        </div>
    )
}

export default QuickSearch