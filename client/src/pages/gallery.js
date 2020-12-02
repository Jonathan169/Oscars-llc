import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import Quote from './components/quote'
import GetQuote from './components/getquote'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/sink-2.jpg)"
}
class gallery extends React.Component {
    state = {
        images: "all",
        imageList:[]
    }

    componentDidMount() {
        this.renderImages()
    }

    renderImages = () => {
        fetch('/gallery/' + this.state.images)
            .then(res => {
                console.log(res)
                this.setState({ imageList: res.imageList })
                console.log(this.state)
                
            })
    }

    handleClick = e => {
        e.preventDefault()
        console.log(e.target.dataset.value)
        this.setState({ images: e.target.dataset.value })
        this.renderImages()

    }

    render() {
        return (
            <div className="">
                <NavBar />
                <main className="">
                    <section className="">
                        <div className="bg-image-2 flexbox-column" style={style}>
                            <div className="gradient-grey">
                                <h2 className="display-2 white-font">Gallery</h2>
                            </div>
                        </div>
                    </section>

                    <section className="">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><p onClick={this.handleClick} data-value="all" >All</p></li>
                                    <li class="breadcrumb-item"><p onClick={this.handleClick} data-value="remodeling" >Remodeling</p></li>
                                    <li class="breadcrumb-item"><p onClick={this.handleClick} data-value="showers">Showers</p></li>
                                    <li class="breadcrumb-item"><p onClick={this.handleClick} data-value="kitchen">Kitchen</p></li>
                                    <li class="breadcrumb-item"><p onClick={this.handleClick} data-value="painting" >Painting</p></li>
                                    <li class="breadcrumb-item"><p onClick={this.handleClick} data-value="bathrooms">Bathrooms</p></li>
                                </ol>
                            </nav>

                            <div className="">

                            </div>

                        </div>
                    </section>


                </main>
                <Footer />
            </div>
        )
    }
}
export default gallery;