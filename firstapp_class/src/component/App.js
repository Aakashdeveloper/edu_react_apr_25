import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../data.json';
import ProductDisplay from './ProductDisplay';

class App extends Component{
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterProduct = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return(
                data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                ||
                data.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )
        })
        this.setState({filteredData:output})

    }

    render(){
        return(
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay products={this.state.filteredData}/>
                <Footer year="2025" month="April"/>
            </>
           
        )
    }
}

export default App;