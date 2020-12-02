import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'

const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + './assets/images/contractor-client.jpg' + ")"
}
class services extends React.Component {
    state = {}

    render() {
        return (
            <div className="">
                <NavBar />
                <main className="">
                    <section className="">
                        <div className="bg-image-2 flexbox-column" style={style}>
                            <div className="gradient-grey">
                                <h2 className="display-2 white-font">Services</h2>
                            </div>
                        </div>
                    </section>

                    <section className="">

                    </section>


                </main>
                <Footer />
            </div>
        )
    }
}
export default services;