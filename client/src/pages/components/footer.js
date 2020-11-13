import React from 'react'

class footer extends React.Component{
    state={}

    render(){
        return(
            <footer className="footer">
                <div className="container1 justify-content-around">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="item1">
                                <img className="logo" src={process.env.PUBLIC_URL+'/assets/images/logo.png'} />
                            </div>
                        </li>
                        <li className="list-group-item">MN License #BC665142</li>
                        <li className="list-group-item">Connect with us</li>
                        <li className="list-group-item">
                            <img className="svg1 white-font" src={process.env.PUBLIC_URL+'/assets/images/facebook.svg'} />
                            <img className="svg1 white-font" src={process.env.PUBLIC_URL+'/assets/images/linkedin.svg'} />
                        </li>
                    </ul>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="list-group-item">
                            <a class="nav-link" href="/about">About Us</a>
                        </li>
                        <li class="list-group-item">
                            <a class="nav-link" href="/gallery">Gallery</a>
                        </li>
                        <li class="list-group-item">
                            <a class="nav-link" href="reviews">Reviews</a>
                        </li>
                        <li class="list-group-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="list-group-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </footer>
        )
    }
}
export default footer;