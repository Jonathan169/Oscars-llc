import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import axios from 'axios'
import Images from './components/images'
import Quote from './components/quote'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/sink-2.jpg)"
}
class gallery extends React.Component {
    state = {
        images: "all",
        imageList: [],
        loadAmount:20
    }

    componentDidMount() {
        this.grabImagesFromServer()
    }

    grabImagesFromServer = (images, loadMore) => {
        axios.post("/gallery/", { imageRequest: images, loadAmount: this.state.loadAmount + loadMore || 20 })
            .then(res => {
                if (loadMore) {
                    this.setState({ loadAmount: this.state.loadAmount + loadMore })
                } else {
                    this.setState({ imageList: res.data, loadAmount: 20 })
                }
                console.log(this.state)
            })
    }

    handleClick = e => {
        e.preventDefault()
        console.log(e.target.dataset)
        this.grabImagesFromServer(e.target.dataset.value, parseInt(e.target.dataset.load))
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
                            <h2 className="display-2 my-4 text-center">Our Work</h2>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-1 pb-0">
                                    <li className="breadcrumb-item"><p onClick={this.handleClick} data-value="all" >All</p></li>
                                    <li className="breadcrumb-item"><p onClick={this.handleClick} data-value="remodeling" >Remodeling</p></li>
                                    <li className="breadcrumb-item"><p onClick={this.handleClick} data-value="tile">Tile</p></li>
                                    <li className="breadcrumb-item"><p onClick={this.handleClick} data-value="kitchen">Kitchen</p></li>
                                    <li className="breadcrumb-item"><p onClick={this.handleClick} data-value="painting" >Painting</p></li>
                                    <li className="breadcrumb-item"><p onClick={this.handleClick} data-value="bathroom">Bathrooms</p></li>
                                </ol>
                            </nav>

                            <Images list={this.state.imageList} handleClick={ this.handleClick } />
                        </div>
                    </section>
                    <section className="mt-4">
                        <Quote />
                    </section>


                </main>
                <Footer />
            </div>
        )
    }
}
export default gallery;