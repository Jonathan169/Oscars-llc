import React from 'react';
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/drywall-texture.jpg)",
}

class getQuote extends React.Component {
    render() {
        return (
            <div className="flex-box justify-content-center p-5 bg-grey" >
                <div className="border-blue p-3 w-auto flex-box bg-white" style={{ border:"5px solid"}}>
                    <h3 className="mr-4">
                        Call (877) 516-3844 for a free quote 
                        on our range of home restoration services
                    </h3>
                    <button className="btn btn-primary m-2"> Contact Us</button>
                </div>
            </div>
            )
    }
}
export default getQuote;