import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import Quote from './components/quote'
import Carousel from 'react-bootstrap/Carousel';
const style={
  height:'70vh',
  width:'100vw',
  objectFit: 'cover'
}

class index extends React.Component{
    state={}

    render(){
        return(
            <div className="">
                <NavBar />

                <main className="">
                    <section className="">
                      <Carousel>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100"
                            style={style}
                            src={process.env.PUBLIC_URL+'/assets/images/carousel1.jpg'}
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                          <img
                            className="d-block w-100"
                            style={style}
                            src={process.env.PUBLIC_URL+'/assets/images/carousel2.jpg'}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            style={style}
                            src={process.env.PUBLIC_URL+'/assets/images/carousel3.jpg'}
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </section>
                    <section className="">
                      <Quote />
                    </section>
                </main>
                
                <Footer />
            </div>
        )
    }
}
export default index;