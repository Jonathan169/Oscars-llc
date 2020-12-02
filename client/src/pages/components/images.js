import React from 'react';

function images(props) {
    var images = props.list
    return (<div id="gallery">
                {images.map((item, index) => {
                       return <img src={"/images/"+item} key={index} />
                 })}
            </div>)
}

export default images;