import { Link } from "react-router-dom";

import "./header.css"

const Header = ()=>{
	return <div className="header">
		<ul className="menu">
			<li > <Link className="menu-button" to="/">Home</Link></li>
			<li><Link className="menu-button" to="vote">Listtodo</Link></li>
			<li><Link className="menu-button" to="listtodo">Vote</Link></li>
		</ul>
	</div>
}
export default Header;