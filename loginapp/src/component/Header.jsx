import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className='navbar-header'>
                        <button type="button"
                        className='navbar-toggle' data-toggle="collapse"
                        data-target="#myNav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className='navbar-brand'>Developer Funnel</Link>
                    </div>
                    <div className='collapse navbar-collapse' id="myNav">
                        <ul className='nav navbar-nav'>
                        
                        </ul>
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <Link to="/register">
                                    <span className='glyphicon glyphicon-user'></span> SignUp
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className='glyphicon glyphicon-log-in'></span> LogIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;