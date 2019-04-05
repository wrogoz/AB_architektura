import React from 'react';
import Description from '../../../description/description';
import DescImg from '../../../description/description--image';
import '../entries_description.css'
import img1 from './images/01_1.jpg';

const Bathroom = props =>{
    return(
        
        <Description
            title="Łazienka w Orange"
            location="Katowice"
            client="Orange"
            area="12"
            status="ukończone"
            author="Ania & Beata"
        >
           
                    <DescImg imgSrc={img1}/>
              
        </Description>
    )
}

export default Bathroom;