import Depoiment from "./Depoiment";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper";

export default function SlideDepoiment() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                 delay: 4500,
                 disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                  }}
                modules={[Autoplay]}
                className="mySwiper w-full"
            >
                <SwiperSlide>
                    <Depoiment
                        depoiment= "ole me chamo matheus e trabalho na bmouse, a bmouse integra seus colaboradores como parte de sua familia e cada dia vc se sente mais pertecente a este lugar"
                        image= "https://attaxx.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png?url=%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png&w=256&q=75"
                        name= "Matheus Teixeira"
                        cargo= "Programador"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Depoiment
                        depoiment= "ole me chamo matheus e trabalho na bmouse, a bmouse integra seus colaboradores como parte de sua familia e cada dia vc se sente mais pertecente a este lugar"
                        image= "https://attaxx.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png?url=%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png&w=256&q=75"
                        name= "Matheus Teixeira"
                        cargo= "Programador"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Depoiment
                        depoiment= "ole me chamo matheus e trabalho na bmouse, a bmouse integra seus colaboradores como parte de sua familia e cada dia vc se sente mais pertecente a este lugar"
                        image= "https://attaxx.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png?url=%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png&w=256&q=75"
                        name= "Matheus Teixeira"
                        cargo= "Programador"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Depoiment
                        depoiment= "ole me chamo matheus e trabalho na bmouse, a bmouse integra seus colaboradores como parte de sua familia e cada dia vc se sente mais pertecente a este lugar"
                        image= "https://attaxx.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png?url=%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png&w=256&q=75"
                        name= "Matheus Teixeira"
                        cargo= "Programador"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Depoiment
                        depoiment= "ole me chamo matheus e trabalho na bmouse, a bmouse integra seus colaboradores como parte de sua familia e cada dia vc se sente mais pertecente a este lugar"
                        image= "https://attaxx.netlify.app/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png?url=%2F_next%2Fstatic%2Fmedia%2F2.bad2751c.png&w=256&q=75"
                        name= "Matheus Teixeira"
                        cargo= "Programador"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
        
    )
}