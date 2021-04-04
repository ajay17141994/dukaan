import React, { useState, useEffect } from 'react';
import './index.scss';
import data from "../../productdata";
function Card() {
    const [productData, manipulateData]=useState();
    const [cartCount, manipulateCart]=useState([]);
    useEffect(() => {
        manipulateData(data);
    });
    const handleClick = id => {
        let cartData={
            "currentId":id,
            "count":+1
        }
        manipulateCart(cartData);
    };
  return (
    <section className="card-wrapper">
        <div className="card-innerwrap">
            <div className="heading">Ice Creams <span class="item-count"><span className="count">10</span></span></div>
            <div className="itemsfirst-section">
            {productData && productData.map((currentData)=>{
                const {id, product_src, product_name, product_unit, product_disc_price, product_act_price, disc  } =currentData;
                return(
            <div className="card-contentwrap">
                <div className="card-left">
                    <div className="productimg-wrap">
                        <img 
                            src={product_src}
                            className="product-img"
                        />
                        {disc && <div className="disc"><span>{disc}</span></div>}
                    </div>
                </div>
                <div className="card-right">
                    <div className="product-name">{product_name}</div>
                    <div className="product-unit">{product_unit} unit</div>
                    <div className="priceinfo-wrap">
                        <div class="price-info">
                            <span className="disc-price">₹{product_disc_price}</span>
                            {product_act_price && <span className="act-price"><del>₹{product_act_price}</del></span>   } 
                        </div>
                        <div className="manipulation-div">
                            <button onClick={() => handleClick(id)} className={`${product_unit ? "manipulation-button" : "ofstock"}`}>{product_unit ? "Add +" : "Out of Stock"}</button>
                        </div>
                    </div>
                </div>
            </div>
                )
             })
            }
            </div>
            <div className="see-more">
                <div className="see-innerwrap">
                <span className="see-moretxt">SEE ALL PRODUCTS</span>
                <img className="see-moretxt" src="../../../images/arrow.svg"/>
                </div>
            </div>
            <div className="heading">Ice Creams <span class="item-count"><span className="count">10</span></span></div>
            <div className="itemssecond-section">
            <div className="card-contentwrap">
                <div className="card-left">
                    <div className="productimg-wrap">
                        <img 
                            src="../../../images/icb.png"
                            className="product-img"
                        />
                    </div>
                </div>
                <div className="card-right">
                    <div className="product-name">Ice Cream Bowl</div>
                    <div className="product-unit">1 unit</div>
                    <div className="priceinfo-wrap">
                        <div class="price-info">
                            <span className="disc-price">₹299</span>
                        </div>
                        <div className="manipulation-div">
                            <button class="manipulation-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default Card;
