import React, { useState, useEffect } from 'react';
import './index.scss';
import whydukaanDatas from "../../whydukaanData";
function Whydukaan() {
    const [whydukaanData, manipulatewhydukaanData]=useState();
    useEffect(() => {
        manipulatewhydukaanData(whydukaanDatas);
    });
  return (
    <section className="why-wrapper">
        <div className="why-innerwrap">
            {
                whydukaanData && whydukaanData.map((currentData)=>{
                    const {why_info, why_src}=currentData
                    return(
                            <div className="why-data">
                                <div className="why-imgwrap">
                                    <img 
                                        src={why_src}
                                        className="why-src"
                                    />
                                </div>
                                <div className="why-info">
                                    {
                                        why_info.map((currentInfo)=>{
                                            return(
                                                    <p className="why-text">{currentInfo}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    )
                })
            }
            
        </div>
    </section>
  );
}

export default Whydukaan;
