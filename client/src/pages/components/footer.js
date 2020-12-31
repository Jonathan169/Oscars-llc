import React from 'react'
import Footer2 from './footer2'
class footer extends React.Component{
    state={}

    render(){
        return(
            <footer className="footer">
                <div className="flex-box justify-content-center">
                    <ul className="list-group list-group-horizontal-md">
                        <li className="list-group-item">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="">
                                        <img className="logo" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/logo.png'} />
                                    </div>
                                </li>
                                <li className="list-group-item">MN License #BC665142</li>
                                <li className="list-group-item">Connect with us</li>
                                <li className="list-group-item">
                                    <img className="svg1 white-font" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/facebook-white.svg'} />
                                    <img className="svg1 white-font" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/linkedin-white.svg'} />
                                </li>
                            </ul>
                        </li>
                        
                        <li className="list-group-item">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-1"><p className="h4">Contact Us</p></li>
                                <li className="list-group-item p-1"><p><strong>Phone:</strong><br/><a className="white-font" href="tel:6123335577">612-333-5577</a></p></li>
                                <li className="list-group-item p-1"><p><strong>Email:</strong><br/>OscarsLLC@oscarsllc.com</p></li>
                                <li className="list-group-item p-1"><p><strong>Addresses:</strong><br/>5775 Wayzata Blvd., Suite 700<br/>St. Louis Park, MN 55416</p></li>
                            </ul>
                        </li>

                        <li className="list-group-item">
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item">
                                    <a className="nav-link white-font" href="/">Home</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link white-font" href="/about">About Us</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link white-font" href="/gallery">Gallery</a>
                                </li>
                                
                                <li className="list-group-item">
                                    <a className="nav-link white-font" href="/services">Services</a>
                                </li>
                                <li className="list-group-item">
                                    <a className="nav-link white-font" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Footer2 />
            </footer>
        )
    }
}
export default footer;
//<li className="list-group-item">
//    <a className="nav-link white-font" href="reviews">Reviews</a>
//</li>