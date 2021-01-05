import React from 'react';

class getQuote extends React.Component {
    render() {
        return (
            <div className="flex-box justify-content-center p-5" id="getQuote" >
                <div className="border-red p-3 w-auto flex-box bg-white" style={{ border:"3px solid"}}>
                    <p className="h4 mr-4">
                        Call (877) 516-3844 for a free quote 
                        on our range of home restoration services
                    </p>
                    <button className="btn btn-primary m-2"> Contact Us</button>
                </div>
            </div>
            )
    }
}
export default getQuote;