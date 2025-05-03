import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../data.json';
import ProductDisplay from './ProductDisplay';
import HookList from './hookDisplay';

const App =() => {
    const [productData] = useState(JSON)
    const [filteredData,setFilteredData] = useState(JSON)
   

    const filterProduct = (keyword) => {
        let output = productData.filter((data) => {
            return(
                data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                ||
                data.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )
        })
        setFilteredData(output)
      

    }

    return(
        <>
            <Header userText={(data) => {filterProduct(data)}}/>
            <HookList/>
            {/* <ProductDisplay products={filteredData}/> */}
            <Footer year="2025" month="April"/>
        </>
       
    )
}

export default App;