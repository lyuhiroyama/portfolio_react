import { Link } from 'react-router-dom';

export default function Navbar(){

    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="site-title" onClick={handleNavClick}>Ryu Hiroyama</Link>
            <ul>
                <li>
                    <Link to="/" onClick={handleNavClick}>Home</Link>
                </li>
                {/* <li>
                    <Link to="/about">About</Link>
                </li> */}
            </ul>
        </nav>
    )
}