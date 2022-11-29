import React, { Component } from 'react'
import "./custom.css"

class Header extends Component {
    state = {  } 
    render() {
        const custom_css = {
            backgroundColor: "#1f2937",
        }        
        return (
            <div>
                {/* <!-- NAVBAR--> */}
                <nav style ={custom_css} className="navbar navbar-expand-md bg-dark navbar-dark py-2"> {/*<!-- "expand-lg" is minimum size it will remove links for hamburger menu+. bg-dark for background. navbar-drak will make text light since navbar is dark-->*/}
                    <div className="container">
                        <a href="#" className="navbar-brand">FrontEnd Bootcamp</a>
    
                        <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navmenu"
                        > 
                        <span className="navbar-toggler-icon"></span>
                        </button> {/*<!--id = navmenu is target to collapse. so it will target that div-->*/}
    
                        <div className="collapse navbar-collapse" id="navmenu"> {/*<!--navmenu is target to be collapsed-->*/}
                            <ul className="navbar-nav ms-auto"> {/*<!--msauto moves them to left-->*/}
                                <li className="nav-item">
                                    <a href="#learn" className="nav-link">What You'll Learn</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#learn" className="nav-link">Questions</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#learn" className="nav-link">Instructors</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- NAVBAR--> */}
                
                <div className="container col-xxl-8 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 mx-auto mx-md">
                            <img src={require("./img/FRGL2X.webp")} className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-md px-4 mx-auto w-md-50">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}
 
export default Header;