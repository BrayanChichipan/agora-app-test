import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import styles from "./hero.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { useDimensions } from "@/hooks";
import { BREAKPOINTS } from "@/constants";

export const Hero = () => {
  const { width } = useDimensions();

  return (
    <div className={styles.container}>
      {width > BREAKPOINTS.TABLET ? (
        <img
          src="/assets/home/Banner-sitio-web.webp"
          className={styles["hero-image"]}
        />
      ) : (
        <div className={styles["swiper-container"]}>
          <Swiper
            navigation={{}}
            modules={[Navigation, Pagination]}
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            loop
            freeMode
          >
            <SwiperSlide className={styles["item-slider"]}>
              <a>
                <img src="/assets/home/Banner-cel-1.webp" />
              </a>
            </SwiperSlide>
            <SwiperSlide className={styles["item-slider"]}>
              <a>
                <img src="/assets/home/Formando-Catalizadores_Cel-1.webp" />
              </a>
            </SwiperSlide>
          </Swiper>
          <div id="next-swipe-button">
            {/* <SemiArrowRight className={styles['right-indicator']} /> */}
          </div>
        </div>
      )}
    </div>
  );
};
