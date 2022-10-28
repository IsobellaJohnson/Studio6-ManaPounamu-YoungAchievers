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

//hold tight che fu down time aaradna star of the show latasha lee, like water ladi 6, fallin alicia keys, ex-factor lauren hill,
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
                <p className="home_content whakatauki">E te iwi e...tēnā tātou. E rere ana ngā mihi ki a koutou, tātou e noho motu ana ki tēnā kura, ki tēnā kura </p>
                <div style = {{height:"42px"}}></div>
                <p className="home_content">Tēnā koutou e te whānau.  The COVID-19 pandemic has had a significant impact on our ability to celebrate the Mana Pounamu Awards however, schools and communities heartened us for taking up the challenge to celebrate their Mana Pounamu recipients in your own unique ways. Kei ruka noa atu koutou.  </p>
                <p className="home_content">This year the Mana Pounamu Komiti are thrilled to announce that we will be hosting our annual celebration evening of Mana Pounamu recipients on Friday 28th October 2022! </p>
                <p className="home_content">Nominations for this award open <strong>Monday, 15th August 2022</strong> and are open until<strong> Friday, 9th September 2022, 12noon,</strong> and can be made via the form on this website.  </p>
                <p className="home_content">As with previous years, we look forward to receiving your nominees as they continue to inspire us with their values and achievements and thank you for your continued efforts to prepare and empower all students for their further tertiary studies. </p>
                <p className="home_content">The Web based application is now live!  <a style={{color:"#339F34"}}href="https://manapounamu.org.nz/forms">https://manapounamu.org.nz/forms</a></p>
                <p className="home_content">We look forward to receiving your nominees as they continue to inspire us with their values and achievements. </p>
                </div>
                <div style = {{height:"150px"}}></div>
                <Footer/>
                <div style = {{height:"42px"}}></div>
        </div>

    )
}

export default History;
