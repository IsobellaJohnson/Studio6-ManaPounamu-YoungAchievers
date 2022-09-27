import swiper1 from '../static/swiper1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function ItemSwiper() {
    return (
        <div className="itemSwiper">
            <Swiper
                effect={"fade"}
                slidesPerView={1.3}
                loop ={true}
                spaceBetween={-450}
                 >
                <SwiperSlide><img src ={swiper1} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={swiper1} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={swiper1} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                </Swiper>
        </div>
    )
}

export default ItemSwiper;
