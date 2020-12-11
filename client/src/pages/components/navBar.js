import React from 'react'

function onClick(e){
  e.preventDefault();
  document.location='/contact';
}
class navBar extends React.Component{
    render(){
        return(
            <header className="pb-5">
                <div className="sticky-nav">
                    <nav className="d-flex justify-content-between">
                        <div className="item1">
                            <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/assets/images/logo.png'} />
                        </div>
                        <div className="phone">
                            <p style={{ fontSize: "1.5rem" }} className="lead mb-0 text-center">
                                Call Us Toll Free At &nbsp;
                            </p>
                            <p style={{ fontSize: "1.25rem", color: "#cf1717" }} className="text-center">
                                (651) 329-7982
                                </p>
                        </div>
                        <div className="contact-us">
                            <p className="white-font">Contact Us</p>
                        </div>
                    </nav>
                    <nav className="px-3 flex-box bg-black" id="nav2">                    
                        <ul className="nav justify-content-around w-100 container">
                          <li className="nav-item">
                                <a className="nav-link grey-font" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link grey-font" href="/contact">Contact</a>
                          </li>
                          <li className="nav-item">
                                <a className="nav-link grey-font" href="/gallery">Gallery</a>
                          </li>
                          <li className="nav-item">
                                <a className="nav-link grey-font" href="reviews">Reviews</a>
                          </li>
                          <li className="nav-item">
                                <a className="nav-link grey-font" href="/services">Services</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link grey-font" href="/about">About Us</a>
                          </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default navBar;