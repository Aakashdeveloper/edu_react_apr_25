import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(props){
        super(props)
        this.state={
            title:"React Search App",
            count:0,
            keyword:'User Input Here'
        }
    }

  

    handleChange = (event) =>{
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Input Here'})
        this.props.userText(event.target.value)
    }
    
   
    render(){
        console.log("render")
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <input onChange={this.handleChange}/>
                <div style={{fontSize:'20px',color:'white'}}>{this.state.keyword}</div>
              
                <hr/>
            </header>
          
        )
    }
   
}

export default Header;


// handleCounter= (event) => {
//     console.log(event)
//     this.setState({count:this.state.count+1})
    
// }
// <h2>{this.state.count}</h2>
// <button onClick={this.handleCounter}>Counter</button>