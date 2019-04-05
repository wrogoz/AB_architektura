import React from 'react';
import '../entries/entries_description/entries_description.css'

const DescImg = props => {
    let style = {
        backgroundImage : `url(${props.imgSrc})`
    }
    return (
        <div className = "entries_description" style = {style}>

        </div>
    )
}

export default DescImg;