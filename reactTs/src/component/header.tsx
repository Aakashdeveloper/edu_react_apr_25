import {type ReactNode} from 'react';

interface HeaderProps{
    image:{
        src:string;
        alt:string
    };
    children: ReactNode
}

function Header({image,children}:HeaderProps){
    return(
        <div style={{textAlign:'center'}}>
            <img src={image.src} alt={image.alt} style={{height:200,width:300}}/>
            <p>{children}</p>
        </div>
    )
}

export default Header