import React,{useState} from 'react';
import './Header.css';

const Header = (props) => {
    const [title] = useState("React Search App");
    //const [count,setCount] = useState();
    const [keyword,setKeyword] = useState('User Input Here')

    const handleChange = (event) =>{
        setKeyword(event.target.value?event.target.value:'User Input Here')
        props.userText(event.target.value)
    }
  
    return(
        <header>
            <div className="logo">{title}</div>
            <input onChange={handleChange}/>
            
            <div style={{fontSize:'20px',color:'white'}}>{keyword}</div>
          
            <hr/>
        </header>
    )
   
}

export default Header;

// <h2>{count}</h2>
//             <button onClick={handleCounter}>Counter</button>
// const handleCounter= () => {
//     setCount(count+1)
// }