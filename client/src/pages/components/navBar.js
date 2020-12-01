import React from 'react'

function onClick(e){
  e.preventDefault();
  document.location='/contact';
}
class navBar extends React.Component{
    state={}

    render(){
        return(
            <header className="">
                <nav id="nav1" className="container1 bg-blue">
                    <div className="item1">
                       &nbsp;
                    </div>
                    <div className="">
                        <p className="textSvg">
                            <img className="svg1" src={process.env.PUBLIC_URL + '/assets/images/phone.svg'} />
                            &nbsp;Toll Free (555)-555-5555</p>    
                    </div>
                    <div className="item1">
                        &nbsp;
                    </div>
                </nav>
                <nav className="d-flex justify-content-between">
                    <div className="item1">
                        <img className="logo" src={process.env.PUBLIC_URL + '/assets/images/logo.png'} />
                    </div>
                    <div className="item1">
                        <button className="btn btn-warning btn-lg" onClick={onClick}>
                            Contact Us
                        </button>
                    </div>
                </nav>
                <nav className="px-3 flex-box bg-grey" id="nav2">                    
                    <ul className="nav justify-content-around w-100">
                      <li className="nav-item">
                            <a className="nav-link grey-font" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                            <a className="nav-link grey-font" href="/about">About Us</a>
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
                            <a className="nav-link grey-font" href="/contact">Contact</a>
                      </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default navBar;