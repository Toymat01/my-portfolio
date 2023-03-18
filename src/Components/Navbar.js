import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import {
	FaHome,
	FaInfoCircle,
	FaRegEnvelope,
	FaBriefcase,
	FaBlog,
} from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<Link to="/">
					<FaHome className="icons" />
				</Link>
				<Link to="/contact">
					<FaRegEnvelope className="icons" />
				</Link>
				<Link to="/about">
					<FaInfoCircle className="icons" />
				</Link>
				<Link to="/portfolio">
					<FaBriefcase className="icons" />
				</Link>
				<Link to="/blog">
					<FaBlog className="icons" />
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
