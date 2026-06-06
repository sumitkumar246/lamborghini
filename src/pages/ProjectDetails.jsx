import "./ProjectDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaBed,
  FaBath,
  FaCar,
  FaArrowLeft,
} from "react-icons/fa";

const projectData = [
  {
    id: "1",
    title: "Luxury Towers",
    location: "Gurgaon, Haryana",
    price: "₹ 4.5 Cr Onwards",
    image: "/images/image7.png",
    area: "3200 Sq.Ft.",
    bedrooms: "4 Bedrooms",
    bathrooms: "4 Bathrooms",
    parking: "2 Parkings",
    desc: "Luxury Towers offer premium high-rise living with elegant architecture, world-class amenities and breathtaking skyline views.",
  },
  {
    id: "2",
    title: "Sky Villas",
    location: "Golf Course Road",
    price: "₹ 8 Cr Onwards",
    image: "/images/images3.png",
    area: "5200 Sq.Ft.",
    bedrooms: "5 Bedrooms",
    bathrooms: "5 Bathrooms",
    parking: "3 Parkings",
    desc: "Sky Villas are crafted for elite lifestyle lovers with private spaces, premium interiors and exclusive luxury experiences.",
  },
  {
    id: "3",
    title: "Premium Residences",
    location: "DLF Phase 5",
    price: "₹ 3.2 Cr Onwards",
    image: "/images/image.png",
    area: "2400 Sq.Ft.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    parking: "2 Parkings",
    desc: "Premium Residences combine comfort, sophistication and modern luxury for families who desire refined urban living.",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((item) => item.id === id);

  if (!project) {
    return <h1 className="project-not-found">Project Not Found</h1>;
  }

  return (
    <main className="project-details-page">
      <section
        className="project-details-hero"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="project-details-overlay"></div>

        <div className="project-details-content">
          <span>Luxury Project</span>
          <h1>{project.title}</h1>

          <p>
            <FaMapMarkerAlt /> {project.location}
          </p>
        </div>
      </section>

      <section className="project-info-section">
        <div className="container project-info-grid">
          <div className="project-main-info">
            <button className="back-btn" onClick={() => navigate("/projects")}>
              <FaArrowLeft /> Back To Projects
            </button>

            <h2>{project.title}</h2>

            <p className="project-desc">{project.desc}</p>

            <div className="project-features">
              <div>
                <FaRupeeSign />
                <h4>{project.price}</h4>
                <p>Starting Price</p>
              </div>

              <div>
                <FaBed />
                <h4>{project.bedrooms}</h4>
                <p>Configuration</p>
              </div>

              <div>
                <FaBath />
                <h4>{project.bathrooms}</h4>
                <p>Premium Baths</p>
              </div>

              <div>
                <FaCar />
                <h4>{project.parking}</h4>
                <p>Reserved Parking</p>
              </div>
            </div>
          </div>

          <div className="project-side-card">
            <h3>Book A Private Visit</h3>
            <p>
              Connect with our luxury property consultant for pricing,
              availability and exclusive site visit.
            </p>

            <a href="/contact">Enquire Now</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;