import React from 'react';
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/contractor-client-3.jpg)",
    backgroundPosition: "center right",
}

class quote extends React.Component{
    state={}

    render(){
        return(
            <div className="flex-box w-100">
                <div className="col-sm-8 bg-image p-0" style={style}>
                    <div className="gradient-blue p-4">
                        <p className="display-3">WANT A FREE QUOTE?</p>
                        <p className="display-4">SCHEDULE A CONSULTATION</p>

                        <p className="lead">
                            Enter your details to receive a call back from us.
                        </p>
                    </div>

                </div>
                <div className="col-sm-4 bg-grey justify-content-center d-flex" >
                    <div className="flexbox-column input-group p-4">
                        <input className="input1" type="text" for="name" placeholder="First &amp; Last name" />
                        <input className="input1" type="text" for="email" placeholder="Email Address" />
                        <input className="input1" type="text" for="address" placeholder="Address, City &amp; Zip code" />
                        <input className="input1" type="text" for="phone" placeholder="Phone" />
                        <textarea className="input1" name="description" placeholder="How can we serve you?" rows="4" cols="50"></textarea>
                        <input className="input1" type="text" placeholder="How did you hear about us" />
                        <button className="btn btn-danger mt-4">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default quote;