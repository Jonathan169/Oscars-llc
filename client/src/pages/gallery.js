import React from 'react';
import NavBar from './components/navBar'
import Footer from './components/footer'
import axios from 'axios'
import Images from './components/images'
import Quote from './components/quote'
import Dropdown from 'react-bootstrap/Dropdown'
const style = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "assets/images/sink-2.jpg)"
}
class gallery extends React.Component {
    state = {
        images:"",
        imageList: [],
        loadAmount: 20,
        add:true,
        show:false,
    }

    componentDidMount() {
        this.grabImagesFromServer()
    }

    grabImagesFromServer = (images, loadMore) => {
        if (this.state.add) {
            var request = { imageRequest: images || this.state.images, loadAmount: this.state.loadAmount + loadMore || 20 }
        } else {
            var request = { imageRequest: images || this.state.images, loadAmount: this.state.loadAmount - loadMore || 20 }
        }
        axios.post("/gallery/", request)
            .then(res => {
                console.log(res)
                if (loadMore) {

                    if (Number.isInteger(res.data.length % 10) === false) {
                        this.setState({ loadAmount: this.state.loadAmount + loadMore, imageList: res.data, add: false })
                    } else {
                        this.setState({ loadAmount: this.state.loadAmount + loadMore, imageList: res.data, add: true})
                    }
                } else {
                    console.log(res.data.length % 10)
                    if (Number.isInteger(res.data.length % 10) === false) {
                        this.setState({ loadAmount: this.state.loadAmount + loadMore, imageList: res.data, add: false })
                    }
                    this.setState({ imageList: res.data, loadAmount: 20, images: images })
                }
                console.log(this.state)
            })
    }
    dropdown = e =>{
        if(this.state.show){
            document.getElementById("dropdownfilterButton").classList.remove("d-block")
            this.setState({show:false})
        }
        else{
            document.getElementById("dropdownfilterButton").classList.add("d-block")
            this.setState({show:true})
        }
    }
    handleClick = e => {
        e.preventDefault()
        console.log(e.target.dataset)
        // this.dropdown()
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
                            <Dropdown>
                              <Dropdown.Toggle variant="dark" className="mb-2" id="dropdown-basic">
                              {this.state.images || "Filter"}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                              <Dropdown.Item onClick={this.handleClick} data-value="All" >All</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Remodeling" >Remodeling</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Tile">Tile</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Granite">Granite</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Kitchen">Kitchen</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Painting" >Painting</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleClick} data-value="Bathroom">Bathrooms</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <Images list={this.state.imageList} add={ this.state.add } handleClick={ this.handleClick } />
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