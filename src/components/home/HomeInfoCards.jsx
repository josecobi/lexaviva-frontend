import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const HomeInfoCards = () => {
    return(
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="p-3 swiper-content">
                    <img src="./assets/free-card-image.svg" alt="Learn at no cost!" />
                    <div>
                        <h5 className="swiper-title pt-2">Save Money</h5>
                        <p>
                            Save money with our free vocabulary sets.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-3 swiper-content">
                    <img src="./assets/responsive-card-image.svg" alt="Responsive" />
                    <div>
                        <h5 className="swiper-title pt-2">Responsive</h5>
                        <p>
                           Lexaviva is compatible with multiple devices. 
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-3 swiper-content">
                    <img src="./assets/selfpace-card-image.svg" alt="Self pace" />
                    <div>
                        <h5 className="swiper-title pt-2">Self Pace</h5>
                        <p>
                            You choose when to practice.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-3 swiper-content">
                    <img src="./assets/editable.svg" alt="Customizable" />
                    <div>
                        <h5 className="swiper-title pt-2">Customizable</h5>
                        <p>
                            Create your own topics. Edit, add, and delete vocabulary words from your topics with ease.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-3 swiper-content">
                    <img src="./assets/levels-card-image.svg" alt="Different levels" />
                    <div>
                        <h5 className="swiper-title pt-2">Different levels</h5>
                        <p>
                            Find a wide variety of topics with different levels of difficulty.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-3 swiper-content">
                    <img src="./assets/flashcards-card-image.svg" alt="Engaging" />
                    <div>
                        <h5 className="swiper-title pt-2">Engaging</h5>
                        <p>
                            Practice with flashcards and memorize like a Pro.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default HomeInfoCards;
