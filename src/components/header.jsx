import React, { Component} from 'react'

import "./custom.css"

import act from "./img/FRGL2X.webp"

class Header extends Component {
    state = {  } 
    render() {
        const custom_css = {
            backgroundColor: "#1f2937",
        }

        return (
            <div>
                {/* <!-- NAVBAR--> */}
                <nav>
                    <div className='container d_flex'>
                        <div id="header_logo_div">
                            <h2>Header Logo</h2>
                        </div>
                        <div className='d_flex_center'>
                            <ul className='links_list'>
                                <li><a href=""></a>header link one</li>
                                <li><a href=""></a>header link two</li>
                                <li><a href=""></a>header link three</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!--HERO--> */}
                <section className="hero">
                    <div className='container'>
                        <div className='hero_divs'>
                            <div>
                                <h1>This website is awesome</h1>
                                <p>This website is awesome</p>
                                <button>Sign Up</button>
                            </div>
                            <div className="image_cont">
                                <img src={(act)} alt="React logo"></img>
                            </div>
                        </div>
                    </div>
                </section>                                   
            </div>
        );
    }
}
 
export default Header;