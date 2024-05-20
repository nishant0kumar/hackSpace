import '../assets/footer.css'
import logo from '../../public/logo.svg'

function Footer() {

    let coded = `while (idea!= null ){
        work = True;
        result = noTension()
        if (work == result){
            return keepGoing;
        }
        else{
            idea = new();
        }
    }`
    return(
        <div>
            <footer>
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="code">
                    <code>
                        {coded}
                    </code>
                </div>
            </footer>
            <div className="copy">
                <p>allCopyRightReserved to (c) hackSpace build with love</p>
            </div>
        </div>
    );
}

export default Footer;