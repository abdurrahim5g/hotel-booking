// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

// import all hero bg-images
import hero1 from "../../assets/images/hero/hero-1.jpg";
import hero2 from "../../assets/images/hero/hero-2.jpg";
import hero3 from "../../assets/images/hero/hero-3.jpg";
import hero4 from "../../assets/images/hero/hero-4.jpg";
import "./Hero.css";

const Hero = () => {
  const heroData = [
    {
      title: "Stay and Explore",
      subtitle:
        "Discover exceptional accommodations and book your dream stay effortlessly.",
      img: hero1,
    },
    {
      title: "Unlock Luxury and Comfort",
      subtitle: " Experience World-Class Hospitality at Our Exclusive Hotels",
      img: hero2,
    },
    {
      title: "Affordable Getaways",
      subtitle: "Discover Budget-Friendly Hotels for Memorable Adventures",
      img: hero3,
    },
    {
      title: "Seaside Serenity",
      subtitle: "Book Your Coastal Retreat and Experience Tranquility",
      img: hero4,
    },
  ];
  return (
    <section className="hero-component hero-slider" id="hero-slider">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        speed={100}
        autoplay={{
          delay: 5000,
          speed: 2000,
          disableOnInteraction: true,
        }}
        // navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {heroData?.map((singleHero, index) => (
          <div key={index} className="slider-item">
            <SwiperSlide key={index}>
              <div
                className="slider-item"
                style={{
                  background: `url(${singleHero.img}) no-repeat center / cover`,
                }}
              >
                <div className="slider-content">
                  <h2 className="title">{singleHero.title}</h2>
                  <p className="subtitle">{singleHero.subtitle}</p>
                  <div className="button">
                    <Link to="/listings" className="go-listings">
                      Go to Listings
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
