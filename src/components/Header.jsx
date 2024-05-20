import '../assets/header.css';
import logo from '../../public/logo.svg'

function Header() {
    
    return (
    <header>
        <nav className="navigation-bar1">
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Grants</a>
        </nav>

        <div className="logo-div">
            <img className='logo' src={logo} alt="" />
        </div>

        <nav className='menu'>
            =
        </nav>

        <nav className="navigation-bar2">
            <a href="">Research</a>
            <a href="">Blog</a>
            <a href="">Menu</a>
        </nav>
    </header>
    );
}

export default Header