import React from 'react';
import "./Banner.css"

const Banner = (props) => {
    const { title, img, bannerBg } = props;

console.log(bannerBg)

    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="banner-covar">
            <h1>{title || ""}</h1>
            <img src={img || ""} alt="" />
        </div>
    );
};

export default Banner;