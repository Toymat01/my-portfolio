import {Link} from "react-router-dom"
import '../Styles/Navbar.css'


const Navbar = () => {
  
    return (
       <nav className="navbar">
           <ul>
              <Link to = '/'></Link>
              <Link to = '/contact'></Link>
              <Link to = '/about'></Link>
              <Link to = '/portfolio'></Link>
              <Link to = '/blog'></Link>
           </ul>
       </nav>
    );
}
 
export default Navbar;