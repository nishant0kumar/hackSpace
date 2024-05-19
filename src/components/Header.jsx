import '../assets/header.css';
import '../assets/responsive.css';

function Header() {
    
    return (
    <header>
        <nav className="navigation-bar1">
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Grants</a>
        </nav>

        <div className="logo-div">
            <p>hackSpace</p>
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