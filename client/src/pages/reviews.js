import React, { Component } from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import { Helmet } from 'react-helmet'
import ScriptTag from 'react-script-tag';

class Demo extends Component {
 
    render() {
        return (<ScriptTag src="https://apps.elfsight.com/p/platform.js" defer/>);
    }
}
const style={
    backgroundImage: "url(" + process.env.PUBLIC_URL+ './assets/images/contractor-client.jpg)'
}
class reviews extends React.Component{
    state={}

    render(){
        return(
            <>
                <NavBar />

                <main className="">
                    <section className="">
                        <div style={style} className="bg-image">

                            &nbsp;
                        </div>
                    </section>

                    <section className="container py-4">
                        
                    {/* <div id="wpac-google-review"></div> */}
                    <Helmet>
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                    </Helmet>
                    <div class="elfsight-app-f2bd1dba-e056-4b81-8fa3-cca01d8cc2e4"></div>
                    
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}
export default reviews;