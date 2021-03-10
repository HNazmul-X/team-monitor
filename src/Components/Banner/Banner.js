import React from 'react';
import "./Banner.css"

const Banner = (props) => {
    const { title, img } = props;
    return (
        <div className="banner-covar">
            <h1>{title || ""}</h1>
            <img src={img || ""} alt=""/>
        </div>
    );
};

export default Banner;