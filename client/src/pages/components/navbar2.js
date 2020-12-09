import React from 'react'

function onClick(e) {
    e.preventDefault();
    document.location = '/contact';
}
class navBar extends React.Component {
    render() {
        return (
            <header className="">
                <div className="sticky-nav border-red" style={{ borderBottom: "3px solid" }}>
                    <nav className="d-flex justify-content-between" id="navbar2">
                        <div className="m-2">
                            <img className="logo" alt="logo" src={process.env.PUBLIC_URL + '/assets/images/logo.png'} />
                        </div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-links grey-font" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links grey-font" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links grey-font" href="/gallery">Gallery</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-links grey-font" href="reviews">Reviews</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-links grey-font" href="/services">Services</a>

                            </li>
                            <li className="nav-item bg-red">
                                <a className="nav-links white-font lead" href="/contact">Contact Us</a>

                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default navBar;