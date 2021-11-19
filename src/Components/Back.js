import React, {Component, useEffect, useState} from 'react';
import Nav from "./Nav";
import MainModal from "./MainModal";
import Footer from "./Footer";
import ModalExample from "./Data";
import {connect} from "react-redux";
import {setState,getCard} from "../redux/action/cardsAction";
import axios from "axios";
import {API_PATH} from "../tools/constans";
import {Modal, ModalBody} from "reactstrap";
import {Link} from "react-router-dom";

const Back = (props) => {

    console.log(props)
    console.log("propswer")

    useEffect(() => {
        axios
            .get(API_PATH + "/api/ProductInfo/" + `${props.props}`)
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data);
            })
            .catch((err) => console.log("Aka aylaning"));
    }, []);


    const [data, setData] = useState([]);
    const [currentColor, setCurrentColor] = useState({});
    const [color, setColor] = useState("");
    const [img, setImg] = useState(data);
    const [size, setSize] = useState();

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const onChange = (e, color) => {
        setColor(e.target.value);
        setCurrentColor(color);
    };

    const onMouseEnter = (e, imgage) => {
        setImg(imgage);
    };

    const addSize = (e, ordersize, id) => {
        setSize({ ...size, id, ordersize });
    };

    const addBasket = (e, data1) => {
        e.preventDefault();

        //data
        if (localStorage.getItem("basket")) {
            let obj = JSON.parse(localStorage.getItem("basket"));
            data1.size = size;
            data1.currentColor = currentColor.colorname;
            obj.push(data1);
            localStorage.setItem("basket", JSON.stringify(obj));
        } else {
            data1.size = size;
            data1.currentColor = currentColor.colorname;
            localStorage.setItem("basket", JSON.stringify([data1]));
        }
    }


        return (
            <div >

                <Nav/>

                <div className="mt-5">
                    <h1>{props.props}</h1>
                    {data.map((data1) => (
                        <div className="artikul">
                            <div>
                                {/*<div className="btn-close" onClick={toggle}></div>*/}
                                <h1 key={data1.id}>{data1.productname}</h1>
                                <div className="d-flex">
                                    <p>Артикул:</p>
                                    <p className="ms-1">35789469</p>
                                    <p className="ms-3">star</p>
                                    <p>&nbsp;1 отзыв</p>
                                    <p className="ms-3">Купили более {data1.buy_quantity} раз</p>
                                </div>
                            </div>
                            <form className="artikul-body">
                                <div className="column-1">
                                    <div className="column-1-container">
                                        {(currentColor.image
                                                ? currentColor.image
                                                : data1.colors[0].image
                                        ).map((img) => (
                                            <div
                                                className="image-box"
                                                onMouseEnter={(e) => onMouseEnter(e, img)}
                                            >
                                                <img className="box-image" src={API_PATH + img.image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="column-2">
                                    <div className="main-image">
                                        <img
                                            src={`${API_PATH}/${
                                                img.image ? img.image : data1.colors[0].image[0].image
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div className="column-3">
                                    <div className="column-3-header">
                    <span className="d-flex">
                      <h1>{data1.price} сумм</h1>&nbsp;
                        <del>{data1.oldprice} сумм</del>
                    </span>
                                        <h5>Цвет: {color}</h5>
                                        <div className="colors">
                                            {data1.colors.map((color, index) => (
                                                <div className="colors-field">
                                                    <label htmlFor={index} className="label">
                                                        <img
                                                            src={API_PATH + color.image[1].image}
                                                            className="color-image"
                                                        />
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        id={index}
                                                        name="radio"
                                                        value={color.colorname}
                                                        onClick={(e) => onChange(e, color)}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/*<div className="sizes">*/}
                                        {/*    {(currentColor.size*/}
                                        {/*            ? currentColor.size*/}
                                        {/*            : data1.colors[0].size*/}
                                        {/*    ).map((item) => (*/}
                                        {/*        <div*/}
                                        {/*            className="sizes-size"*/}
                                        {/*            onClick={(e) => addSize(e, item.size, data1.id)}*/}
                                        {/*        >*/}
                                        {/*            <span className="size-title">{item.size}</span>*/}
                                        {/*            <span className="size-sub">{item.quantity}</span>*/}
                                        {/*        </div>*/}
                                        {/*    ))}*/}
                                        {/*</div>*/}

                                        <div className="buttons">
                                            <button
                                                className="to-basket"
                                                onClick={(e) => addBasket(e, data1)}
                                            >
                                                Добавить в корзину
                                            </button>
                                            <button className="fast-order">Быстрый заказ</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ))}

                    {/*<Link*/}
                    {/*    to={"/three"}*/}
                    {/*    className="text-decoration-none bord d-flex justify-content-center mt-4"*/}
                    {/*>*/}
                    {/*    <button className="btn btn-danger">*/}
                    {/*        Больше информации о товаре*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                </div>


                <div className='w-50 back'>
                    <h1>Описание</h1>
                    <h6 className='mt-4'>Силиконовый чехол Apple- отличное дополнение к вашему iPhone 12 Pro Max. Он плотно прилегает к
                        кнопкам громкости и режима сна, точно повторяет контуры телефона. Мягкая подкладка из</h6>
                    <h6 className='text-danger mb-5 mt-3'>Развернуть описание</h6>

                    <tr>
                        <th><span>Совместимость ----------------------------------</span></th>
                        <td> Apple iPhone 12 Pro Max; iPhone iPhone 12 Pro Max; Apple iPhone 12 PRO MAX
                            6.7; Iphone 12 Pro Max (6.7)
                        </td>
                    </tr>
                    <tr>
                        <th>Тип чехлов ---------------------------------------------</th>
                        <td>защитный кейс</td>
                    </tr>
                    <tr>
                        <th>Вес товара с упаковкой (г) ----------------------------------</th>
                        <td>50 г</td>
                    </tr>

                    <tr>
                        <th>Высота предмета ----------------------------------</th>
                        <td>16.5 см</td>
                    </tr>
                    <tr>
                        <th>Ширина предмета ----------------------------------</th>
                        <td>8.19 см</td>
                    </tr>
                    <tr>
                        <th>Ширина упаковки ----------------------------------</th>
                        <td>8.7 см</td>
                    </tr>
                    <tr>
                        <th>Высота упаковки ----------------------------------</th>
                        <td> 17.5 см</td>
                    </tr>

                    <h5 className='text-danger mt-4 mb-4'>Развернуть характеристики</h5>
                    <p className='inf'>Информация о технических характеристиках, комплекте поставки, стране изготовления и внешнем виде
                        товара носит справочный характер и основывается на последних доступных сведениях от продавца</p>


                </div>
                <Footer/>
            </div>
        );

};



export default Back;