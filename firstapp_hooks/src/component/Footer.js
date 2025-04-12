import React from 'react';

function Footer(props){
    console.log(props)

    //deststructre
    const {month,year} = props
    return(
        <footer>
            <hr/>
            <center>
            {/* <h3>&copy; DeveloperFunnel {props.year} {props.month}</h3> */}
            <h3>&copy; DeveloperFunnel {month} {year}</h3>
            </center>
            
        </footer>
      
    )
}

export default Footer;