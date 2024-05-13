import React from "react";


const Hero = ({hero}) =>{
    return(
        <div>
            <img src={hero.image}/>
            <h2>
                {hero.name}
                {hero.address}
            </h2>
        </div>
    )
}

export default Hero