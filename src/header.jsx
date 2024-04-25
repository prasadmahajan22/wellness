import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

let Header = () => {
    let [displays , setDisplay] = useState(false);
    let hamburger = () => {
        setDisplay((prev) => !prev)
    }

    let submenu = {
        display : (displays) ? "flex" : "none"
    }
    return (
        <header>
            <div className="heading">
                <h1>Family Wellness</h1>
                <p>MASSAGE THERAPY</p>
            </div>

            <nav>
                <div className="main-screen">
                    <a href="#" className='home'>HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">FAQ</a>
                    <a href="#">CONTACT</a>
                </div>
                <div className="small-Screen">
                    <FontAwesomeIcon icon={ faBars} id='bar' onClick={hamburger}/>
                    <div className="submenu" style={submenu}>
                    <a href="#" className='home'>HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">FAQ</a>
                    <a href="#">CONTACT</a>
                    </div>
                </div>
                
            </nav>
        </header>
    )
}

export default Header;