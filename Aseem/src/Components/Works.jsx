import React from "react";
import '../App.css'
import { Carousel } from "react-bootstrap";
import One from "../assets/tinified/one.png";
import Two from "../assets/tinified/two.png"; 
import Three from "../assets/tinified/three.png";
import Four from "../assets/tinified/four.jpg";
import Five from "../assets/tinified/five.jpg";
import Six from "../assets/tinified/six.png";

const projects = [
  {
    id: 1,
    name: "Pet Vibe",
    description:
      "Developed an e-commerce website for pet products and services.",
    Heading1: "Product Categories:",
    Heading2: "Service Booking:",
    Heading3: "Google Maps Integration:",
    Value1: "Organized products into categories for easy navigation.",
    Value2: "Book grooming and boarding services online.",
    Value3: "Show locations and operating hours of physical stores.",
    image: One,
  },
  {
    id: 2,
    name: "New Portfolio",
    description:
      "Developed a responsive portfolio website using HTML, Bootstrap, and React.js to showcase my skills and projects effectively.",
    Heading1: "Interactive Navigation:",
    Heading2: "Responsive Design:",
    Heading3: "Personal Branding:",
    Value1: "Simple, user-friendly navigation.",
    Value2: "Optimized for all devices.",
    Value3: "Integrated for networking.",
    image: Two,
  },
  {
    id: 3,
    name: "Old Portfolio",
    description:
      "Developed a personal portfolio using HTML, CSS, and JavaScript to showcase skills and projects.",
    Heading1: "Interactive Navigation:",
    Heading2: "Social Media Integration:",
    Heading3: "Contact Section:",
    Value1:
      "Easy-to-use navigation for accessing sections like skills, projects, and contact information.",
    Value2: "Links to social media profiles for networking.",
    Value3: "Easy way for employers or collaborators to get in touch.",
    image: Three,
  },
  {
    id: 4,
    name: "Cyberbullying Detection Using Machine Learning",
    description:
      "Developed a machine learning model to detect cyberbullying in social media posts.",
    Heading1: "Data Preprocessing:",
    Heading2: "TF-IDF Vectorization:",
    Heading3: "Prediction:",
    Value1: "Processed text data for analysis and model training.",
    Value2: "Converted text data into numerical form for model training.",
    Value3: "Classified new text data as cyberbullying or not.",
    image: Four,
  },
  {
    id: 5,
    name: "Notes Maker Web Application",
    description:
      "Developed a notes application enabling users to create, edit, and delete notes with headings and timestamps.",
    Heading1: "Note Creation:",
    Heading2: "Management:",
    Heading3: "JavaScript Functionality:",
    Value1: "Add new notes with a title, date, and description.",
    Value2: "Delete notes when they are no longer needed.",
    Value3: "Dynamic behavior, including form handling and note updates.",
    image: Five,
  },
  {
    id: 6,
    name: "To-Do List Application",
    description:
      "Created a To-Do List application for efficient task management.",
    Heading1: "Task Addition:",
    Heading2: "Prioritization:",
    Heading3: "Completion Tracking:",
    Value1: "Add new tasks easily.",
    Value2: "Mark tasks with different levels of importance.",
    Value3: "Mark tasks as completed to track progress.",
    image: Six,
  },
];

const Works = () => {
  const isMObile = window.innerWidth < 768;
  return (
    <div  id="Project"
      style={{
        backgroundColor: "#16022e",
        marginTop: isMObile ? "1pc" : "5rem",
        marginLeft: isMObile ? "2pc" :"7pc",
        padding: isMObile ? "2pc":"2rem",
      }}
      className="rounded col-10"
    >
      <Carousel indicators style={{ position: "relative" }}>
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <h1 style={{ color: '#d933ca', marginBottom: '20px' }}>{project.name}</h1>
            <div className="d-flex flex-wrap align-items-center">
              <div className="col-md-6 mb-4">
                <img
                  src={project.image}
                  className="rounded w-100"
                  alt={project.name}
                />
              </div>
              <div className="col-md-6 text-white detail ps-md-4">
                <div className="mb-3">
                  <p>{project.description}</p>
                </div>
                <ul className="ps-3">
                  <li>
                    <b>{project.Heading1}</b> {project.Value1}
                  </li>
                  <li>
                    <b>{project.Heading2}</b> {project.Value2}
                  </li>
                  <li>
                    <b>{project.Heading3}</b> {project.Value3}
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Works;
