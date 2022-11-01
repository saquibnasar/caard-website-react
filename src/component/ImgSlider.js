import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
export default function ImgSlider({ data }) {
  // const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider mt-4">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <Slider {...settings}>
              {data.map((value, id) => {
                return (
                  <div key={id} className="swiper-slide">
                    <img src={value.URL} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="swiper-content">
          <p>{data[0].Title}</p>
        </div>
      </div>
    </>
  );
}
