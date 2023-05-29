import "./VideoPopup.css";
import { FaRegPlayCircle } from "react-icons/fa";
import videoBG from "../../../assets/images/video-bg.jpg";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="video-popup-section"
      style={{
        background: `url(${videoBG}) no-repeat center / cover`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="popup-content">
              <h3>
                Book online today and look forward to a relaxing stay with us
              </h3>
              <span className="divider"></span>
              <p>
                Wotch our video tour now and imagine here & then book your dream
                room
              </p>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="5IqwCF8OIj4"
                onClose={() => setOpen(false)}
              />
              <button onClick={() => setOpen(true)}>
                <FaRegPlayCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPopup;
