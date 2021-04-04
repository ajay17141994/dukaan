import React, { useState, useEffect } from 'react';
import './index.scss';
import whydukaanDatas from "../../whydukaanData";
function Store() {
  return (
    <section className="store-wrapper">
        <div className="store-innerwrap">
            <div className="heading">STORE DETAILS</div>
            <div className="adress-wrap">
                <div className="landmark">Mano Super Market </div>
                <div className="address">Krishvi Terazzo, 80 Feet Road Indiranagar,</div>
                <div className="city-state">Bengaluru, Karnataka</div>
            </div>
            <div className="chat-wrap">
                <img src="../../../images/chat.svg" className="chat-src"/>
            </div>
        </div>
        
    </section>
  );
}

export default Store;
