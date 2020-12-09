import React from 'react'

class footer extends React.Component{
    state={}

    render(){
        return(
            <footer className="footer">
                <div className="container1 justify-content-around">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="">
                                <img className="logo" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/logo.png'} />
                            </div>
                        </li>
                        <li className="list-group-item">MN License #BC665142</li>
                        <li className="list-group-item">Connect with us</li>
                        <li className="list-group-item">
                            <img className="svg1 white-font" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/facebook.svg'} />
                            <img className="svg1 white-font" alt="svg icon" src={process.env.PUBLIC_URL+'/assets/images/linkedin.svg'} />
                        </li>
                    </ul>
                    <ul className="list-group list-group-flush">
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
                            <a className="nav-link white-font" href="reviews">Reviews</a>
                        </li>
                        <li className="list-group-item">
                            <a className="nav-link white-font" href="/services">Services</a>
                        </li>
                        <li className="list-group-item">
                            <a className="nav-link white-font" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </footer>
        )
    }
}
export default footer;