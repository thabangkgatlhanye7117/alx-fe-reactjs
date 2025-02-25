import { Outlet, Link } from "react-router-dom";

const Navbar = () =>{

      return(
        <>
        <nav>
            <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/services'><Services></Services></Link>
                </li>
                <li>
                  <Link to='/contact'>Home</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
      )
}

export default Navbar