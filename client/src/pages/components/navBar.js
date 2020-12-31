import React from 'react'
import Navbar2 from './navbar2'
function onClick(e){
  e.preventDefault();
  document.location='/contact';
}
class navBar extends React.Component{
    state = {
        show:"none",
    }

    changeNavState = (e) => {
        e.preventDefault();
        if (this.state.show === "none") {
            this.setState({ show: "block" })
        } else {
            this.setState({ show: "none" })
        }
        setTimeout(() => { console.log(this.state) })
    }


    render(){
        return(
            <header className="pb-5">
                <Navbar2 show={this.state.show} changeNavState={this.changeNavState} />
                <div className="sticky-nav">
                    <nav className="d-flex justify-content-between">
                        <div className="item1">
                            <a href="/"><img className="logo" alt="logo"
                                src={process.env.PUBLIC_URL + '/assets/images/logo.png'} /></a>
                        </div>
                        <div className="phone">
                            <p style={{ fontSize: "1.5rem" }} className="lead mb-0 text-center">
                                Call Us At &nbsp;
                            </p>
                            <p style={{ fontSize: "1.25rem", color: "#cf1717" }} className="text-center">
                                (651) 329-7982
                                </p>
                        </div>
                        <div className="contact-us" onClick={ onClick }>
                            <p className="white-font font-weight-light">Contact Us</p>
                        </div>
                        <div id="hamburger" className="item1">
                            <img className="svg3" alt="logo" onClick={this.changeNavState }
                                src={process.env.PUBLIC_URL + '/assets/images/hamburger.svg'} />
                        </div>
                    </nav>
                    <nav className="px-3 flex-box bg-black" id="nav2">                    
                        <ul className="nav justify-content-around w-100 container" id="nav2-list">
                          <li className="nav-item">
                                <a className="nav-link white-font" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link white-font" href="/about">About Us</a>
                          </li>
                          <li className="nav-item">
                                <a className="nav-link white-font" href="/contact">Contact</a>
                          </li>
                          <li className="nav-item">
                                <a className="nav-link white-font" href="/gallery">Gallery</a>
                          </li>
                          
                          <li className="nav-item">
                                <a className="nav-link white-font" href="/services">Services</a>
                          </li>
                          <li className="nav-item">
                             <a className="nav-link white-font" href="reviews">Reviews</a>
                          </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default navBar;
