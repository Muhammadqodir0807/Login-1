
import React from "react";
// import "./styles.css";


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import Slider from "react-slick";

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    // let className = props.type === "next" ? "nextArrow" : "";
    // let className2 = props.type === "prev" ? "prevArrow" : "";
    className += " arrow";

    // const char = props.type === "next" ? "👉" : "👈";
    const char = props.type === "next" ? "👉": "";
    const char2 = props.type === "prev" ?  "👈" : "";



    return (
        <div className="box">
        <div className=" carousel-button">
        <span className={className} onClick={props.onClick}>
      {char}
    </span>
        </div>

            <div className="carousel-button2">
        <span className={className} onClick={props.onClick}>
      {char2}
    </span>
            </div>
        </div>

    );
}

function customPaging(i) {
    return <span>{i + 1}</span>;
}

function appendDots(dots) {
    return (
        <div style={{ backgroundColor: "#eee" }}>
            <ul style={{ margin: "3px" }}> {dots} </ul>
        </div>
    );
}

export default function CarouselMain() {
    const renderSlides = () =>
        [
            {
                id:1,foto:"https://images.wbstatic.net/bners1/big_smartphone_1310.jpg"
            },
            {
                id:2,foto:"https://images.wbstatic.net/bners1/big_avto_1310.jpg"
            },
            {
                id:3,foto:"https://images.wbstatic.net/bners1/big_delivery_1310.jpg"
            },
            {
                id:4,foto:"https://images.wbstatic.net/bners1/big_holodilnik_1310_1.jpg"
            },
            {
                id:5,foto:"https://images.wbstatic.net/bners1/big_zagran_goods_1310.jpg"
            },
            {
                id:6,foto:"https://images.wbstatic.net/bners1/big_kredit_1310.jpg"
            },
            {
                id:7,foto:"https://images.wbstatic.net/bners1/big_food_1310.jpg"
            },
            {
                id:8,foto:"https://images.wbstatic.net/bners1/big_wb_1310.jpg"
            }
            ].map(num => (
            <div>

                <img src={num.foto} alt=""/>
                {/*<h3>Slide {num}</h3>*/}
            </div>
        ));

    return (
        <div className="App">
            <Slider
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
                dots={true}
                customPaging={customPaging}
                appendDots={appendDots}
            >
                {renderSlides()}
            </Slider>
        </div>
    );
}


