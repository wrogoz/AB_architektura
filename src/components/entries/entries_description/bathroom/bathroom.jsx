import React from 'react';
import Description from '../../../description/description';
import DescImg from '../../../description/description--image';
import '../entries_description.css'
import img1 from '../../images/wnetrza/lazienka/1.jpg';
import img2 from '../../images/wnetrza/lazienka/2.jpg';
import img3 from '../../images/wnetrza/lazienka/3.jpg';
import img4 from '../../images/wnetrza/lazienka/4.jpg';
import img5 from '../../images/wnetrza/lazienka/5.jpg';
const Bathroom = props =>{
    return(
        
        <Description
            title = "Nazwa projektu"
            location = "Katowice"
            client = "xXx"
            area = "12"
            status = "ukończone"
            author = "Ania & Beata"
        >
           
                    <DescImg imgSrc={img1}/>
                    <DescImg imgSrc={img2}/>
                    <DescImg imgSrc={img3}/>
                    <DescImg imgSrc={img4}/>
                    <DescImg imgSrc={img5}/>
        </Description>
    )
}

export default Bathroom;