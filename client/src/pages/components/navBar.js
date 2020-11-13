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
                <nav id="nav1" className="container1">
                    <div className="item1">
                        <img className="logo" src={process.env.PUBLIC_URL+'/assets/images/logo.png'} />
                    </div>
                    <div className="item1">
                        <p className="textSvg"><img className="svg1" src={process.env.PUBLIC_URL+'/assets/images/phone.svg'} />&nbsp;Toll Free (555)-555-5555</p>    
                    </div>
                    <div className="item1">
                        <button className="btn btn-warning btn-lg" onClick={onClick}>
                            Contact Us
                        </button>
                    </div>
                </nav>
                <nav className="px-3" id="nav2">
                    <ul className="nav justify-content-around">
                      <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/about">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="reviews">Reviews</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/services">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/contact">Contact</a>
                      </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default navBar;