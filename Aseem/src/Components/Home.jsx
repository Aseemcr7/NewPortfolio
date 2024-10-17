import React from 'react'
import '../ComponentCss/Animations.css'

const Home = () => {
  return (
    <>
        <h1
              className="text-light"
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                paddingLeft: "7pc",
                paddingRight: "7pc",
                paddingTop: "7pc",
                paddingBottom: "10px",
              }}
            >
              Hey, What's up! <br />
              I'm
              <span className='Bounce'
                style={{
                  background:
                    "linear-gradient(to right, #4F00B2, #4a0f59, #d933ca)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "3.5rem",
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
                paddingLeft: "7pc",
                paddingRight: "7pc",
              }}
            >
              Dot Net Full Stack Developer
            </h2>
            <h5
              className="text-light"
              style={{
                paddingLeft: "7pc",
                paddingRight: "7pc",
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