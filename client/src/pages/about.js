import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import GetQuote from './components/getquote'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/livingroom.jpg)"
}
class about extends React.Component{
    state={}

    render(){
        return (
            <div className="">
                <NavBar />
                <main className="">
                    <section className="">
                        <div className="bg-image-2 flexbox-column" style={style}>
                            <div className="gradient-grey">
                                <h2 className="display-2 white-font">About Us</h2>
                            </div>
                        </div>
                    </section>

                    <section className="container py-5">
                        <div className="card mb-5 border-0" >
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div class="card-body">
                                        <h2 className="card-title">Meet Your General
                                            Remodeling Contractors in Apple valley
                                        </h2>
                                        <p className="lead">We are a full-service general contractor
                                        specializing in design, remodeling, and insurance restoration.
                                        Founded on the idea of forging long-term relationships with
                                        customers and vendors, we have been serving the Minneapolis-St.
                                        Paul area since 2010. Our goal is to cultivate your imagination
                                        to make your design dreams a reality, providing a headache-free
                                        experience at a fair and reasonable price.
                                        </p>
                                        <p className="lead">
                                            Whether you're looking for a simple repair or a whole home
                                            renovation, we work with you to create a design that fits your
                                            style and budget. And we are committed to completing every
                                            project in a professional and timely manner, in accordance
                                            with all applicable building regulations.
                                        </p>
                                        <h3 className="my-4">What puts us above another general 
                                        remodeling contractor in the Metro Area?
                                        </h3>
                                        <ul className="text-justify">
                                            <li className="lead">
                                                At Oscar's LLC, we are fully licensed and 
                                                insured and always start our projects with storage and 
                                                intuitive design, space planning, and minding traffic flow.
                                            </li>
                                            <li className="lead">
                                                We are known for being affordable and reasonably priced.
                                            </li>
                                            <li className="lead">
                                                We offer fair estimates and spare no efforts to achieve customer satisfaction.
                                            </li>
                                        </ul>
                                        <h3 className="my-4">Why should you trust MG Valley Construction?</h3>

                                        
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + "assets/images/worker-standing-2.jpg"}
                                        className="card-img" alt="..." />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="">
                        <GetQuote />
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
export default about;

