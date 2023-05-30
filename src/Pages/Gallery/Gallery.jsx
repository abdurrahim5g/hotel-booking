import InnerHero from "../../components/InnerHero/InnerHero";
import GalleryCard from "../../components/Section/GalleryCard/GalleryCard";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <InnerHero>Gallery</InnerHero>
      <GalleryCard></GalleryCard>
    </div>
  );
};

export default Gallery;
