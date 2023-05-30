import SectionHeading from "../../SectionHeading/SectionHeading";
import "./GalleryCard.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import roomImages from "../../../data/rooms.json";

const GalleryCard = () => {
  return (
    <section className="gallery-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title="Our Gallery"
              subtitle={"explore"}
            ></SectionHeading>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mx-auto">
            <Swiper
              effect={"coverflow"}
              loop={true}
              navigation={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {roomImages?.map((room, index) => (
                <SwiperSlide key={index}>
                  <img src={room.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCard;
