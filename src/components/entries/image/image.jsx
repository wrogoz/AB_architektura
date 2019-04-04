import React from 'react';
import './image.css'

const Image = props =>{

    let style={
        backgroundImage: `url(${props.imgSrc})`
    }
    return <div className="imageSet" style={style}>
        
    </div>
}

export default Image;