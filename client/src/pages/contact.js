import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import axios from 'axios'
import validator from 'email-validator'

const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + './assets/images/contractor-client.jpg)'
}
class contact extends React.Component {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        if(validator.validate(this.state.email)){
        axios.post("/formsubmit",this.state )
            .then((res) => {
                console.log(res)
                window.location.assign('/aboutus')
            })
        }else {
            document.getElementById('emailFeedback').classList.add("d-block")
            document.getElementById('validationDefault02').classList.add("is-invalid")
        }
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

                        <div className="row p-4">
                            <div className="col-md-8">
                                <h2 className="display-3 ">Any Questions?</h2>
                                <p className="lead">Please do not hesitate to reach out</p>
                                <h3 className="mt-5">CONSULTATION STEPS</h3>
                                <ul className="text-justify">
                                    <li className="lead">
                                        <span className="font-weight-bold">Discuss</span> wants, needs, goals, and budget with customer
                                            </li>
                                    <li className="lead">
                                        <span className="font-weight-bold">Hold</span> a proposal meeting to review designs and contracts
                                            </li>
                                    <li className="lead">
                                        <span className="font-weight-bold">Review</span> product choices, providing vendor lists and incorporating product purchase times
                                            </li>
                                    <li className="lead">
                                        <span className="font-weight-bold">Create</span> construction schedule
                                            </li>
                                    <li className="lead">
                                        <span className="font-weight-bold">Communicate</span> project progress with homeowner
                                            </li>
                                    <li className="lead">
                                        <span className="font-weight-bold">Conduct</span> final walk-through with homeowner
                                            </li>
                                </ul>
                            </div>
                            <div className="col-md-4 p-3">
                                <form onSubmit={ this.handleSubmit }>
                                    <div class="form-row">
                                        <label for="validationDefault01">Name</label>
                                        <input onChange={this.handleChange} placeholder="John Smith" name="name" type="text" class="form-control " id="validationDefault01" required />
                                        
                                        <label for="validationDefault02">Email</label>
                                        <input onChange={this.handleChange} placeholder="John.smith@gmail.com" name="email" type="text" for="email" class="form-control" id="validationDefault02" required />
                                        <div id="emailFeedback" class="invalid-feedback">Email format invalid.</div>
                                       
                                        <label for="validationDefault03">City</label>
                                        <input onChange={this.handleChange} placeholder="Minneapolis" name="city" type="text" class="form-control" id="validationDefault03" required />
                                        
                                        <label for="validationDefault04">Phone</label>
                                        <input onChange={this.handleChange} placeholder="xxx-xxx-xxxx" name="phone" type="text" class="form-control" id="validationDefault04" required />
                                        
                                        <label for="validationDefault05">How did you hear about us</label>
                                        <input onChange={this.handleChange} placeholder="Google, Facebook, etc..." name="us" type="text" class="form-control" id="validationDefault05" />
                                        
                                        <label for="validationDefault06">Reason for Reaching Out</label>
                                        <textarea onChange={this.handleChange} placeholder="I have a question about ..." name="description" class="form-control" id="validationDefault06" rows='2' required ></textarea>
                                        
                                        <button type="submit" className="btn btn-danger mx-auto mt-4">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
export default contact;