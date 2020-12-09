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

                    <section className="container">
                        <div class="jumbotron w-auto mt-4">
                            <h1 class="display-4">OUR BACKGROUND</h1>
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
                            <button class="btn btn-primary btn-lg"  >Learn more</button>
                            <hr class="my-4" />

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