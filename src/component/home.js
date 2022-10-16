import swiper2 from '../static/swiper2.png'
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
           <div className="h_item1">
                <div className="swiper2_box">
                <Swiper
                effect={"fade"}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade,Pagination]}
                 >
                <SwiperSlide><img src ={swiper2} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={logo} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={swiper2} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={logo} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                <SwiperSlide><img src ={swiper2} alt="swiper2" className="swiper1Img" /></SwiperSlide>
                </Swiper>
                </div>
                <div className ="h_right">
                    <div className ="h_title">
                    Celebrating Māori<br/>
                     achievement in Otago
                    </div>
                    <div className ="h_dec">
                The awards ceremony is an opportunity to<br/> celebrate the achievement of rakatahi Māori in 
                   </div>
                   <div className ="h_button">
                   <Link to='/appfrom'>Application Form</Link>
                   </div>
                </div>
           </div>
           <div style = {{height:"42px"}}></div>
           <Item2/>
           <div style = {{height:"100px"}}></div>
           <ItemSwiper/>
           <div style = {{height:"70px"}}></div>
           <Item3/>
           <div style = {{height:"100px"}}></div>
           <Item4/>
           <div style = {{height:"170px"}}></div>
           <Footer/>
           <div style = {{height:"75px"}}></div>
        </div>
    )
}

export default History;
