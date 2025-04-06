import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <>
                <Header/>
                <h1>Hiiii</h1> 
                <h2>Developer Funnel</h2>
                <hr/>
          
                <Footer year="2025" month="April"/>
            </>
           
        )
    }
}

export default App;