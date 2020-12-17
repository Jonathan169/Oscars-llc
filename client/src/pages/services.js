import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import Quote from './components/quote'
import GetQuote from './components/getquote'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/livingroom.jpg)"
}
class services extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <NavBar />
                <main>
                    <section>
                        <div className="bg-image-2 flexbox-column" style={style}>
                            <div className="gradient-grey">
                                <h2 className="display-2 white-font">What We Do</h2>
                            </div>
                        </div>
                    </section>

                    <section className="container">
                        <h2 className="display-3 text-center my-4">Our Services</h2>
                        <hr />
                        <div className=" py-4">

                            <div className="card mb-5" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={process.env.PUBLIC_URL + "assets/images/tile-2.jpg"}
                                            className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">Tile</h5>
                                            <p className="lead">Here at Oscar's LLC, we know tile. We provide the best work wether that be a residential
                                            or commercial project. Our projects include hotels, restaurants, locker rooms, kitchens, 
                                            and restrooms. We also work with a variety of materials including stone, mosaic, 
                                            porcelain, ceramic, quarry, and granite. Our team of experts will make the whole 
                                            process from design to installtion as seemless as possible. 
                                            </p>
                                            <a type="button" className="btn btn-danger" href="/contact">Learn More</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={process.env.PUBLIC_URL + "assets/images/drywall-room.jpg"}
                                            className="card-img" alt="drywall image" />
                                    </div>
                                    <div className="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">Drywall</h5>
                                            <p className="lead"> Drywall installation and repair is another 
                                            one of our leading services. We offer a wide range of services 
                                            from the largest commercial drywall projects to the smallest 
                                            residential drywall projects. Our installation staff is 
                                            knowledgeable and will take any notes into consideration. 
                                            If walls need to be removed or replaced, we can help. We 
                                            are also available to redesign or repair your existing structure.
                                            </p>
                                            <a type="button" className="btn btn-danger" href="/contact" >Learn More</a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-5" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={process.env.PUBLIC_URL + "assets/images/granite-display.jpg"}
                                            className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">Granite</h5>
                                            <p className="lead">We want to get your job right the first time. That
                                            is why, when it comes to measuring, we are very particular. At Oscar's LLC,
                                            your stone or quartz countertop surface is always custom-cut to your
                                            specifications for cabinets. We'll walk you
                                            through the entire experience of revitalizing your kitchen and bathroom.
                                            From the selection of styles and design, to the professional installation,
                                            we're always here for you.


                                            </p>
                                            <a type="button" className="btn btn-danger" href="/contact" >Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-5" >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={process.env.PUBLIC_URL + "assets/images/painting-room.jpg"}
                                            className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">Painting</h5>
                                            <p className="lead">The colors and textures of your interior 
                                            spaces play a big part in creating the feel of home. And When it comes 
                                            to the exterior of your home, there are lots of factors to 
                                            consider. So Whether you're looking to create a cohesive look 
                                            in a chain of restaurants, add beauty and value to your 
                                            home, or simply put a new coat of paint on 
                                            the walls of your school or business, we can help. 
                                            We'll do quick, quality work - so that you can get down to business!
                                            </p>
                                            <a type="button" className="btn btn-danger" href="/contact" >Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section>
                        <GetQuote />
                    </section>
                    <section className="container">
                        <h2 className="display-4 text-center my-4">Additional Services</h2>
                        <hr />
                        <div className="flex-box service-cards">

                            <div class="card">
                                <img src={process.env.PUBLIC_URL + "assets/images/bathroom-1.jpg"} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Bathroom</h5>
                                    <ul className="">
                                        <li className="">Drywall painting</li>
                                        <li className="">Fixtures</li>
                                        <li className="">Tiling</li>
                                        <li className="">Demolition</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <img src={process.env.PUBLIC_URL + "assets/images/kitchen-1.jpg"} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Kitchen</h5>
                                    <ul className="">
                                        <li className="">Cabinets</li>
                                        <li className="">Counter tops</li>
                                        <li className="">Granite</li>
                                        <li className="">Flooring</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <img src={process.env.PUBLIC_URL + "assets/images/fireplace-1.jpg"} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Remodeling</h5>
                                    <ul className="">
                                        <li className="">Room additions</li>
                                        <li className="">Chimney</li>
                                        <li className="">Wetbars</li>
                                    </ul>
                                </div>
                            </div>

                            

                        </div>
                    </section>
                    <section>
                        <Quote />
                    </section>


                </main>
                <Footer />
            </div>
        )
    }
}
export default services;