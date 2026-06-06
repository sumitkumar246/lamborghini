import "./Projects.css";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Luxury Towers",
      location: "Gurgaon, Haryana",
      price: "₹ 4.5 Cr Onwards",
      image: "/images/image7.png",
    },
    {
      id: 2,
      title: "Sky Villas",
      location: "Golf Course Road",
      price: "₹ 8 Cr Onwards",
      image: "/images/images3.png",
    },
    {
      id: 3,
      title: "Premium Residences",
      location: "DLF Phase 5",
      price: "₹ 3.2 Cr Onwards",
      image: "/images/image.png",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">

        <div className="projects-header">
          <span>Luxury Collection</span>
          <h1 className="section-title">
            Our Signature Projects
          </h1>

          <p>
            Discover world-class residences crafted with
            elegance, luxury and timeless architecture.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((item) => (
            <div className="project-card" key={item.id}>

              <div className="project-image">
                <img src={item.image} alt={item.title} />

                <div className="project-badge">
                  Luxury
                </div>
              </div>

              <div className="project-content">
                <h3>{item.title}</h3>

                <p className="location">
                  <FaMapMarkerAlt />
                  {item.location}
                </p>

                <h4>{item.price}</h4>

                <button
                  onClick={() =>
                    navigate(`/project/${item.id}`)
                  }
                >
                  View Details
                  <FaArrowRight />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;