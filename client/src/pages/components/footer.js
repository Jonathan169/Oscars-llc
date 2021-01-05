import React from 'react'
import Footer2 from './footer2'
class footer extends React.Component{
    state={}

    render(){
        return(<> 
            
            <footer className="footer">
                <div className="flex-box justify-content-center pt-4">
                    <ul className="list-group list-group-horizontal-md">
                        <li className="list-group-item pb-4">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="">
                                        <img className="logo" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/logo-2.png'} />
                                    </div>
                                </li>
                                {/* <li className="list-group-item">MN License #BC665142</li> */}
                                <li className="list-group-item">Connect with us</li>
                                <li className="list-group-item">
                                    <img className="svg1 white-font" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/facebook-white.svg'} />
                                    <img className="svg1 white-font" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/linkedin-white.svg'} />
                                </li>
                            </ul>
                        </li>
                        
                        <li className="list-group-item">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-1"><p className="h4">Contact Us</p></li>
                                <li className="list-group-item py-1"><p><strong>Phone:</strong><br/><a className="grey-font" href="tel:6123335577">612-333-5577</a></p></li>
                                <li className="list-group-item py-1"><p><strong>Email:</strong><br/><span className="grey-font">OscarsLLC@oscarsllc.com</span></p></li>
                                <li className="list-group-item py-1"><p><strong>Addresses:</strong><br/>12757 Genesee Way<br/>Apple Valley, MN, 55124</p></li>
                            </ul>
                        </li>

                        <li className="list-group-item">
                            <ul className="list-group list-group-flush ">
                            <li className="list-group-item py-1"><p className="h4">Links</p></li>
                                <li className="list-group-item py-2">
                                    <a className="nav-link white-font" href="/">Home</a>
                                </li>
                                <li className="list-group-item py-2">
                                    <a className="nav-link white-font" href="/about">About Us</a>
                                </li>
                                <li className="list-group-item py-2">
                                    <a className="nav-link white-font" href="/gallery">Gallery</a>
                                </li>
                                
                                <li className="list-group-item py-2">
                                    <a className="nav-link white-font" href="/services">Services</a>
                                </li>
                                <li className="list-group-item py-2">
                                    <a className="nav-link white-font" href="/contact">Contact</a>
                                </li>
                                <li className="list-group-item py-2">
                                   <a className="nav-link white-font" href="/reviews">Reviews</a>
                                </li>
                                <li className="list-group-item pt-5">&nbsp;</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Footer2 />
            </footer>
            </>
        )
    }
}
export default footer;
