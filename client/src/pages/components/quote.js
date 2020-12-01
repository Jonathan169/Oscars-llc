import React from 'react';
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/contractor-client.jpg)",
    backgroundPosition: "center right",
}

const style2 = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/drywall-texture.jpg)",
}

class quote extends React.Component{
    state={}

    render(){
        return(
            <div className="flex-box w-100">
                <div className="col-sm-6 bg-image" style={ style }>
                    &nbsp;
                </div>
                <div className="col-sm-6 flexbox-column input-group" style={ style2 }>
                    <div>
                        <input className="input1" type="text" for="name" placeholder="First &amp; Last name" />
                        <input className="input1" type="text" for="email" placeholder="Email Address" />
                        <input className="input1" type="text" for="address" placeholder="Address, City &amp; Zip code" />
                        <input className="input1" type="text" for="phone" placeholder="Phone" />
                        <textarea className="input1" name="description" placeholder="How can we serve you?" rows="4" cols="50"></textarea>
                        <input className="input1" type="text area" placeholder="How did you hear about us" />
                    </div>
                </div>
            </div>
        )
    }
}
export default quote;