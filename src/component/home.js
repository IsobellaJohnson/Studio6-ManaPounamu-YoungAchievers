import swiper from '../static/swiper.jpeg'
import logo from '../static/swiper1.png'
import Item2 from './item2';
import ItemSwiper from './itemSwiper';
import Item3 from './item3';
import Item4 from './item4';
import Footer from './footer';
import {Link} from 'react-router-dom'
import {Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function History() {
    return (
        <div className="home_box">
           <div style = {{height:"42px"}}></div>
           <div className="g-container">
           <div className="h_item1">
                <div className="swiper2_box">
                <Swiper
                effect={"fade"}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade,Pagination]}
                 >
                <SwiperSlide><img src ={swiper} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={logo} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={swiper} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={logo} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={swiper} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                </Swiper>
                </div>
                </div>
                <div className ="h_application">
                    <div className ="h_title">
                    Celebrating Māori achievement in Otago Secondary Schools<br/>
                    He tāoka, he koha, he kuru pounamu
                    </div>
                    <div className ="h_dec">
                    The awards ceremony is an opportunity to celebrate the achievement of rakatahi Māori in Otago Secondary Schools.
                   </div>
                   <div className ="h_button">
                   <Link to='/appfrom'>Application Form</Link>
                   </div>
                </div>
                </div>
                <div className="h_info">
                <p className="h_content whakatauki">E te iwi e...tēnā tātou. E rere ana ngā mihi ki a koutou, tātou e noho motu ana ki tēnā kura, ki tēnā kura </p>
                <p className="h_content">The objectives of these awards are to: </p>
                </div>
        </div>
    )
}

export default History;
