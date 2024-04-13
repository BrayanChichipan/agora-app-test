import { Container } from "@/components/layouts";
import styles from "./allies.module.scss";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Allies, Financiers } from "./constants";

export const AlliesAndFinanciers = () => {
  return (
    <div className={styles.container}>
      <Container as="section">
        <div className={styles.head}>
          <div className={styles.text}>
            <h2>Nuestros aliados</h2>
            <p>
              Conoce a las organizaciones que nos acompañan por una sociedad más
              inclusiva y en sintonía con el ambiente.
            </p>
            <p>
              Contáctate para conocer más sobre cómo colaborar con Agora
              Partnerships.
            </p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a>
              Súmate como aliado{" "}
              <i
                className="far fa-arrow-alt-circle-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "2rem 0",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div className={styles["swiper-container"]}>
            <Swiper
              navigation={{
                nextEl: "#next-swipe-button",
              }}
              modules={[Navigation, Autoplay]}
              slidesPerView={"auto"}
              centeredSlides={false}
              freeMode
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {Allies.map((ally) => (
                <SwiperSlide key={ally.name} className={styles["item-slider"]}>
                  <img src={ally.logo} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div id="next-swipe-button">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className={styles.head}>
          <div className={styles.text}>
            <h2>Nuestros Financiadores</h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "2rem 0",
            gap: "1rem",
          }}
        >
          <div className={styles["swiper-container"]}>
            <Swiper
              navigation={{
                nextEl: "#next-swipe-button-2",
              }}
              modules={[Navigation, Autoplay]}
              slidesPerView={"auto"}
              freeMode
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {Financiers.map((ally) => (
                <SwiperSlide key={ally.name} className={styles["item-slider"]}>
                  <img src={ally.logo} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div id="next-swipe-button-2">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </Container>
    </div>
  );
};
