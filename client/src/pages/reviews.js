import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'

const style={
    height:'70vh',
    width:'100%',
    backgroundSize: 'cover',
    backgroundPosition:'right ',
    backgroundImage: "url(" + process.env.PUBLIC_URL+ './assets/images/contractor-client.jpg'  + ")"
  }
class reviews extends React.Component{
    state={}

    render(){
        return(
            <div className="">
                <NavBar />

                <main className="">
                    <section className="">
                     <div style={style} className="">
                         {/* <img  src={process.env.PUBLIC_URL+'./assets/images/contractor-client.jpg'} /> */}
                         &nbsp;
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
export default reviews;