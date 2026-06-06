import "./GallerySection.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const GallerySection = () => {
  const navigate = useNavigate();

  const images = [
    {
      img: "/images/image8.png",
      title: "Luxury Exterior",
      type: "Architecture",
    },
    {
      img: "/images/images3.png",
      title: "Grand Lobby",
      type: "Interior",
    },
    {
      img: "/images/image2.png",
      title: "Sky Lounge",
      type: "Lifestyle",
    },
    {
      img: "/images/image4.png",
      title: "Infinity Pool",
      type: "Amenities",
    },
    {
      img: "/images/image5.png",
      title: "Premium Bedroom",
      type: "Residence",
    },
    {
      img: "/images/image6.png",
      title: "Landscape Garden",
      type: "Nature",
    },
  ];

  return (
    <section className="luxury-gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="gallery-subtitle">Luxury Collection</span>
          <h2 className="section-title">Experience The Lifestyle</h2>
          <p>
            A curated glimpse of refined spaces, premium architecture and
            elevated living.
          </p>
        </div>

        <div className="luxury-gallery-grid">
          {images.map((item, index) => (
            <div className={`gallery-card card-${index + 1}`} key={index}>
              <img src={item.img} alt={item.title} />

              <div className="gallery-overlay">
                <span>{item.type}</span>
                <h3>{item.title}</h3>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;