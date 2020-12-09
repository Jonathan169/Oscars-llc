import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import axios from 'axios'
import Quote from './components/quote'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + './assets/images/contractor-client.jpg)'
}
class contact extends React.Component {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/formsubmit",this.state )
            .then((res) => {
                console.log(res)
            })
    }
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(this.state)
    }
    render() {
        return (
            <div className="">
                <NavBar />

                <main className="">
                    <section className="">
                        <div className="bg-image-2 flexbox-column" style={style}>
                            <div className="gradient-grey">
                                <h2 className="display-2 white-font">Contact</h2>
                            </div>
                        </div>
                    </section>
                    <section className="container-fluid">

                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="display-3 ">Any Questions?</h2>
                                <p className="lead">Please do not hesitate to reach out</p>
                            </div>
                            <div className="col-md-4">
                                <div className="justify-content-center d-flex" >
                                    <div className="flexbox-column input-group p-4">
                                        <input className="input1" onChange={this.handleChange} name="name" type="text" for="name" placeholder="First &amp; Last name" />
                                        <input className="input1" onChange={this.handleChange} name="email" type="text" for="email" placeholder="Email Address" />
                                        <input className="input1" onChange={this.handleChange} name="address" type="text" for="address" placeholder="Address, City &amp; Zip code" />
                                        <input className="input1" onChange={this.handleChange} name="phone" type="text" for="phone" placeholder="Phone" />
                                        <textarea className="input1" onChange={this.handleChange} name="description" placeholder="How can we serve you?" rows="4" cols="50"></textarea>
                                        <input className="input1" onChange={this.handleChange} name="us" type="text" placeholder="How did you hear about us" />
                                        <button onClick={ this.handleSubmit }className="btn btn-danger mt-4">Submit</button>
                                    </div>
                                </div>
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
export default contact;