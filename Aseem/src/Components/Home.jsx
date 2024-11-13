import React from 'react'
import '../ComponentCss/Animations.css'

const Home = () => {
  const isMObile = window.innerWidth < 768;
  return (
    <>
        <h1
              className="text-light"
              style={{
                fontSize: isMObile ? "2rem" : "3rem",
                fontWeight: "900",
                paddingLeft: isMObile ? "1pc" :"7pc",
                paddingRight: isMObile ? "1pc" :"7pc",
                paddingTop: isMObile ? "1pc" :"7pc",
                paddingBottom: "10px",
              }}
            >
              Hey, What's up! <br />
              I'm
              <span className='Bounce p-1'
                style={{
                  background:
                    "linear-gradient(to right, #4F00B2, #4a0f59, #d933ca)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: isMObile ? "3rem" : "3.5rem",
                  fontWeight: "900",
                }}
              >
                Sheik <br /> Mohammed Aseem
              </span>
              ,
            </h1>
            <h2
              className="fw-bold text-light"
              style={{
                paddingLeft: isMObile ? "1pc" : "7pc",
                paddingRight: isMObile ? "1pc" :"7pc",
              }}
            >
              Dot Net Full Stack Developer
            </h2>
            <h5
              className="text-light"
              style={{
                paddingLeft: isMObile ? "1pc" :"7pc",
                paddingRight: isMObile ? "1pc" :"7pc",
              }}
            >
              I love building amazing web applications!
              <br />
              From creating seamless user experiences to crafting robust backend
              systems,
              <br />
              my passion lies in bringing ideas to life.
              <br />
              Let's connect and build something extraordinary together!
            </h5>
    </>
  )
}

export default Home