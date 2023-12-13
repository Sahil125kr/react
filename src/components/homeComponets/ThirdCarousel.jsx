/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

const ThirdCarousel = ({ homethirdslider }) => {
    return (
        <section className="container-fluid bg-gray-500">
            <div className='pt-10 ml-2 mr-2 pb-8 items-center bg-slate-200'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={2} // Adjust the number of slides per view based on screen size
                    // navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000, // Set the delay in milliseconds between slides
                        disableOnInteraction: false, // Continue autoplay even when the user interacts with the slider
                    }}
                    className='flex justify-center m-auto w-full  sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/4'
                >
                    {homethirdslider.map((obj, idx) => (
                        <SwiperSlide className='  rounded-2xl ' key={idx}>
                            <NavLink to="#">
                                <img src={obj.img} className='w-full' alt={`slide-${idx}`} />
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ThirdCarousel;
