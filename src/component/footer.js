import logo from '../static/logo.png'

function Footer() {
    return (
        <div className="Footer_box">
            <img src ={logo} alt="logo" className="h_logo" />
            <div class="footer_dec"> 
                <div>Copyright 2022 Mana Pounamu - All rights reserved</div>
                <div>Privacy Policy | Terms and Conditions</div>
                <div>Web Design by Belle and Josh</div>
            </div>
        </div>
    )
}

export default Footer;
