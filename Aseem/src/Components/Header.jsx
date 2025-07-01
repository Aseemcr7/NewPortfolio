import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTrophy} from 'react-icons/fa';
import {FaLaptop} from 'react-icons/fa';
import {FaIdCard} from 'react-icons/fa';
import '../ComponentCss/Animations.css'
import {FaFile} from 'react-icons/fa';

const Header = () => {
  return (
    <>
    <nav style={{ backgroundColor: '#0b0215', border: '1px solid #2e0f54' }} className='sticky-top SlideInLeft navbar navbar-expand-lg m-1'>
  <div className='container-fluid'>
    <a style={{ 
                  background:
                    "linear-gradient(to right, #4F00B2, #4a0f59, #d933ca)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "3.5rem",
                  fontWeight: "900" }} className='navbar-brand fs-4 fw-bold ps-3' href='#'>ASEEM</a>
    <button 
      className='navbar-toggler' 
      type='button' 
      data-bs-toggle='collapse' 
      data-bs-target='#navbarcol'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarcol'>
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item glow px-3'>
          <a style={{ color: '#e6d8f8' }} className='nav-link active fs-6' href='#Project'>
            <FaLaptop className='me-2 fs-4 pb-1' /> PROJECTS
          </a>
        </li>
        <li className='nav-item glow border-5 px-3'>
          <a style={{ color: '#e6d8f8' }} className='nav-link fs-6' href='#Achivements'>
            <FaTrophy className='me-2 fs-4 pb-1' /> ACHIEVEMENTS
          </a>
        </li>
        <li className='nav-item glow border-5 px-3'>
          <a style={{ color: '#e6d8f8' }} className='nav-link fs-6' href='#contact'>
            <FaIdCard className='me-2 fs-4 pb-1' /> CONTACT
          </a>
        </li>
        <li className='nav-item glow border-5 px-3'>
  <a 
    style={{ color: '#e6d8f8' }} 
    className='nav-link fs-6' 
    href="/MyResume.pdf" 
    download="MyResume.pdf"
  >
    <FaFile className='me-2 fs-4 pb-1 alws' /> Download CV
  </a>
</li>

      </ul>
    </div>
  </div>
</nav>


</>
  );
};

export default Header;
