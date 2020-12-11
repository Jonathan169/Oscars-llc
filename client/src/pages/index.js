import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import Quote from './components/quote'
import GetQuote from './components/getquote'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/carousel3.jpg)"
}
class index extends React.Component{
    render(){
        return(
            <div className="">

                <NavBar />

                <main className="">
                    <section className="">
                        <div className="bg-image-2 flexbox-column" style={style}>
                            <div className="gradient-grey">
                                <h2 className="display-2 white-font">Oscar's LLC</h2>
                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <div class="jumbotron w-auto mt-4">
                            <h1 class="display-3">OUR BACKGROUND</h1>
                            <p class="lead">We are a full-service general
                            contractor specializing in design, remodeling,
                            and insurance restoration. Founded on the
                            idea of forging long-term relationships with
                            customers and vendors, we have been serving
                            the Minneapolis-St. Paul area since 2005.
                            Our goal is to cultivate your imagination to
                            make your design dreams a reality, providing
                            a headache-free experience at a fair and
                                reasonable price.</p>
                            <button class="btn btn-danger btn-lg"  >Learn more</button>
                            <hr class="my-4" />

                        </div>
                    </section>
                    
                    <section className="">                        
                        <div className="flex-box w-100">
                            <div className="col-sm-6 bg-image"
                                style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/contractor-client.jpg " }}>
                                &nbsp;
                            </div>
                            <div className="col-sm-6 flexbox-column " >
                                <div className="p-4">
                                    <h2 className="display-3">Remodeling?</h2>
                                    <p className="lead"
                                        style={{ textAlign: "right", lineHeight: "1.8" }}>
                                        Thinking about making some enhancements
                                        to your home's interior or exterior, and
                                        searching for reliable restoration services
                                        contractors? If you've ever had work done
                                        on your home, such as bathroom and kitchen
                                        remodeling, home additions and window replacement,
                                        you know that choosing the right team is extremely
                                        important. Oscar's L.L.C has been
                                        serving the 11 country metro area since 2009.
                                        We are a fully certified, licensed and insured
                                        company, and our crew are known for being consummate
                                        professionals. With our variety of high quality
                                        products and valuable guarantees, we're
                                        confident you'll be satisfied with our work.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box w-100">
                            <div className="col-sm-6 flexbox-column " >
                                <div className="p-4">
                                    <h2 className="display-3">Why Oscars LLC?</h2>
                                    <p className="lead"
                                        style={{ textAlign: "left", lineHeight: "1.8" }}>
                                        Thinking about making some enhancements
                                        to your home's interior or exterior, and
                                        searching for reliable restoration services
                                        contractors? If you've ever had work done
                                        on your home, such as bathroom and kitchen
                                        remodeling, home additions and window replacement,
                                        you know that choosing the right team is extremely
                                        important. Oscar's L.L.C has been
                                        serving the 11 country metro area since 2009.
                                        We are a fully certified, licensed and insured
                                        company, and our crew are known for being consummate
                                        professionals. With our variety of high quality
                                        products and valuable guarantees, we're
                                        confident you'll be satisfied with our work.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 bg-image"
                                style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/shower.jpg " }}>
                                &nbsp;
                            </div>
                        </div>
                    </section>

                    <section className="">
                        <GetQuote />
                    </section>

                    <section className="container">
                        <div className="text-center">
                            <h3 className="display-4">Our list of services</h3>
                            <div className="flex-box p-4 home-list">
                                <div class="card">
                                    <img src={ process.env.PUBLIC_URL+"assets/images/bathroom.jpg" } class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Remodeling</h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/drywall-work.jpg"} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Drywall</h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/tile.jpg"} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Flooring</h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/painting-work.jpg"} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Paint Indoors</h5>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/shower2.jpg"} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Tile</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="">
                        <Quote />
                    </section>

                </main>                
                <Footer />
            </div>
        )
    }
}
export default index;