import {useState,useEffect} from 'react';
import './Search.css';

const base_url = process.env.REACT_APP_API_URL

const Search = () => {
  
    const [location,setLocation] = useState([])

    // any thing you want on page load
    //fetch axios promises async/await
    //lifecycle
    // componentWillMount > when first time component load
    // componentDidUpdate > when state change happen
    // componentWillUnmount > When we leave the component

    useEffect(() => {},[])
    

    return(
        <div className='search'>
           <div id="logo">
               <span>D!</span>
            </div>
            <div id="heading">
                Search Place Near To You
            </div>
            <div id="dropdown">
                <select id="city-dropdown">
                    <option>----SELECT CITY----</option>
                </select>
                <select className="restSelect">
                    <option>----SELECT Restaurants----</option>
                </select>

            </div>
        </div>
    )
}

export default Search