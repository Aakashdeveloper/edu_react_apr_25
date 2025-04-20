import {useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link, useSearchParams,useNavigate} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from "react-slick";
import 'react-tabs/style/react-tabs.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuDisplay from './menuDetails';



const base_url = process.env.REACT_APP_API_URL
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Details = () => {
  
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const [details,setDetails] = useState([])
    const mealId = sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
    const [menu,setMenu] = useState([])
    const [userItem,setUserItem] = useState([])

    const addToCart = (data) =>{
        console.log(data)
        setUserItem(data)
    }

    function proceed(){
        sessionStorage.setItem('menu',userItem);
        navigate(`/placeOrder/${details.restaurant_name}`)
    }

    useEffect(() => {

        const fetchData = async() => {
            try{
              let restId = searchParams.getAll('restId');
              let response = await axios.get(`${base_url}/details/${restId}`)
              let menuData = await axios.get(`${base_url}/menu/${restId}`)
              setDetails(response.data[0])
              setMenu(menuData.data)
            }catch(err){
                console.log(err)
            }
        }

        fetchData()
    },[])

    return(
        <>
            <div className='main'>
                <div className='tileImage'>
                   
                    <Slider {...settings}>
                        {details.image_gallery?.map((item) => {
                            return(
                                <div  className="sliderImage">
                            
                                    <img src={item} alt={details.restaurant_name}
                                    className="sliderImage"/>
                                </div>
                            )
                        })}
                       
                    </Slider>
                       
                   
                </div>
                <div className='tileContent'>
                    <div className='content'>
                        <h1>{details.restaurant_name}</h1>
                        <span id="cfeedback">231 Customers Rating Average</span>
                        <h3>Old Price <del>Rs. 450</del></h3>
                        <h3>Offer Price Rs. {details.cost}</h3>
                        <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                        <div>
                            <div className="icons">
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                            </div>
                            <div className="icons">
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Tabs>
                        <TabList>
                            <Tab>About</Tab>
                            <Tab>Contact</Tab>
                           
                        </TabList>

                        <TabPanel>
                                <h2>{details.restaurant_name}</h2>
                                <p>{details.restaurant_name}  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h3>Contact: {details.contact_number}</h3>
                        </TabPanel>
                      
                    </Tabs>
                    <Link to={`/listing/${mealId}`} className='btn btn-danger'>Back</Link>
                    &nbsp;
                    <button className='btn btn-success'
                    onClick={proceed}>Proceed</button>
                </div>
                <div className='col-md-12'>
                    <hr/>
                    <center><h2>Menu</h2></center>
                    <hr/>
                    <MenuDisplay menuData={menu}
                    finalOrder = {(data) => {addToCart(data)}}/>
                </div>
               
            </div>
        </>
    )

}

export default Details

