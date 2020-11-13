import React from 'react';

class quote extends React.Component{
    state={}

    render(){
        return(
            <div className="container1 row w-100">
                <div className="col-sm-6">
                    &nbsp;
                </div>
                <div className="col-sm-6 quote-box input-group">
                    <div>
                        <input className="input1" type="text" placeholder="First &amp; Last name" />
                        <input className="input1" type="text" placeholder="Email Address" />
                        <input className="input1" type="text" placeholder="Address, City &amp; Zip code" />
                        <input className="input1" type="text" placeholder="Phone" />
                        <textarea className="input1" name="description" placeholder="How can we serve you?" rows="4" cols="50"></textarea>
                        <input className="input1" type="text area" placeholder="How did you hear about us" />
                    </div>
                </div>
            </div>
        )
    }
}
export default quote;