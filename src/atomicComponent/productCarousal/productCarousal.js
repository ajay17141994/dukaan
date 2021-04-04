import './index.scss';
import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import sectionCarousalData from "../../sectionData";

function Productcarousal() {
    const [sectionData, manipulateSectionData]=useState();
    useEffect(() => {
        manipulateSectionData(sectionCarousalData);
    });
    const params = {
        slidesPerView: 2.6,
        spaceBetween: 14,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
  return (
    <div className="sliderouter-wrapper">
        <div className="heading">Bestsellers</div>
      <Swiper {...params}>
          {
              sectionData && sectionData.map((currentData)=>{
                  const {section_src, section_info} =currentData
                return(
                    <div className="slider-wrap">
                        <div className="inner-wrap">
                            <img src={section_src} className="section-ic"/>
                        </div>
                        <div className="section-name">{section_info}</div>
                    </div>
                )
              })
          }
      </Swiper>
    </div>
  );
}

export default Productcarousal;
