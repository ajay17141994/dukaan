import React, { useState, useEffect } from 'react';
import './index.scss';
import FootertabDatas from "../../Footertabdata";
console.log("FootertabDatas", FootertabDatas);
function Footertab() {
    const [FootertabData, manipulateFootertabDatas]=useState();
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        manipulateFootertabDatas(FootertabDatas);
    });
  return (
    <section className="tab-wrapper">
        <div className="tab-innerwrap">
            {
                FootertabData && FootertabData.map((currentData)=>{
                    const {tab_info, tab_src, active}=currentData
                    return(
                            <div className={`tab-data ${active ? "active" : ""}`}>
                                <div className="tab-imgwrap">
                                    <img 
                                        src={tab_src}
                                        className="tab-src"
                                    />
                                </div>
                                <div className="tab-info">
                                    <span className="tab-text">{tab_info}</span>
                                </div>
                            </div>
                    )
                })
            }
            
        </div>
    </section>
  );
}

export default Footertab;
