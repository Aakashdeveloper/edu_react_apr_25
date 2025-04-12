import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = (props) => {
    //console.log(props)
    const renderProduct = props.products.map((item,index)=>{
        return(
            <div className='card' key={index}>
                <img src={item.image} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>
                    <h3>Rs. {item.cost}</h3>
                    <h3>{item.uses}</h3>
                </div>
            </div>
        )
    })


    return(
        <div className='main'>
            {renderProduct}
        </div>
    )
}

export default ProductDisplay