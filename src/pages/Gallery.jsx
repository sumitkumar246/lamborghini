import "./Gallery.css";
import { FaSearchPlus } from "react-icons/fa";

const Gallery = () => {
  const images = [
    "/images/image.png",
    "/images/images3.png",
    "/images/image2.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
  ];

  return (
    <main className="gallery-page">

      <section className="gallery-hero">
        <div className="gallery-overlay"></div>

        
      </section>

      <section className="gallery-section">
        <div className="container">

          <div className="gallery-header">
            <span>Premium Lifestyle</span>
            <h2>Experience Luxury Living</h2>
          </div>

          <div className="luxury-gallery-grid">
            {images.map((img, index) => (
              <div className="gallery-card" key={index}>
                <img src={img} alt="image" />

                <div className="gallery-hover">
                  <FaSearchPlus />
                  <h3>Luxury Residence</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default Gallery;