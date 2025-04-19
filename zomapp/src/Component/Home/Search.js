import {useState,useEffect} from 'react';
import './Search.css';

const base_url = process.env.REACT_APP_API_URL

const Search = () => {
  
    const [location,setLocation] = useState([])
    const [restaurants,setRestaurants] = useState([])

    useEffect(() => {
        console.log("on load")
        //api calling on page load
        fetch(`${base_url}/location`,{method:'GET'})
        //return promise
        .then((res) => res.json())
        //return data
        .then((data) => {
            console.log(data)
            setLocation(data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    const handleCity =(event) => {
        //console.log(event.target.value)
        //console.log(`${base_url}/restaurant?stateId=${event.target.value}`)
        //fetch(`${base_url}/restaurant?stateId=${event.target.value}`)
        let stateId = event.target.value
        fetch(`${base_url}/restaurant?stateId=${stateId}`)
        .then((res) => res.json())
        .then((data) => {
            setRestaurants(data)
        })
    }

    const renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }
    

    return(
        <div className='search'>
           <div id="logo">
               <span>D!</span>
            </div>
            <div id="heading">
                Search Place Near To You
            </div>
            <div id="dropdown">
                <select id="city-dropdown" onChange={handleCity}>
                    <option>----SELECT CITY----</option>
                    {renderCity(location)}
                </select>
                <select className="restSelect">
                    <option>----SELECT Restaurants----</option>
                    {renderRest(restaurants)}
                </select>
               

            </div>
        </div>
    )
}

export default Search