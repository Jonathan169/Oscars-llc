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
                    <section className="container p-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="display-4 card-title">OUR BACKGROUND</h5>
                                <p className="lead">We are a full-service general
                                contractor specializing in design, remodeling. Founded on the
                                idea of forging long-term relationships with
                                customers and vendors, we have been serving
                                the Minneapolis-St. Paul area since 2010.
                                Our goal is to cultivate your imagination to
                                make your design dreams a reality, providing
                                a headache-free experience at a fair and
                                reasonable price.</p>
                                <button className="btn btn-primary btn-lg ml-auto mb-5"  >Learn more</button>
                            </div>
                        </div>
                    </section>
                    
                    <section className="">
                        <div className="flex-box w-100">
                            <div className="col-md-6 bg-image"
                                style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/contractor-client-2.jpg " }}>
                                &nbsp;
                            </div>
                            <div className="col-md-6 flexbox-column " >
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
                            <div className="col-md-6 flexbox-column " >
                                <div className="p-4">
                                    <h2 className="display-3">Why Oscars LLC?</h2>
                                    <p className="lead"
                                        style={{ textAlign: "left", lineHeight: "1.8" }}>
                                        Our inspiration for quality service is born from seeing 
                                        people and properties not as they are now, but for what they 
                                        can become. We can help you perfect a recent purchase, create 
                                        additional space for a growing family, or remodel an existing 
                                        space to meet your needs. We pride ourselves on professionalism, 
                                        excellent workmanship, and exceeding expectations. We will work 
                                        with you on a one-on-one basis to ensure all your requests are 
                                        fulfilled.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-image"
                                style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/shower-2.jpg " }}>
                                &nbsp;
                            </div>
                        </div>
                    </section>

                    <section className="">
                        <GetQuote />
                    </section>

                    <section className="container pt-4">
                        <div className="text-center">
                            <h3 className="display-4">Our list of services</h3>
                            <div className="flex-box py-4 home-list">
                                <div className="card">
                                    <img src={ process.env.PUBLIC_URL+"assets/images/bathroom.jpg" } className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Remodeling</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/granite-display.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Granite</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/tile.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Flooring</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/painting-work.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Paint Indoors</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/shower2.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Tile</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/drywall-work-2.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Drywall</h5>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + "assets/images/outdoor-painting-2.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Paint Outdoors</h5>
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