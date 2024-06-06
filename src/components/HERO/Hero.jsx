import React from "react";
import "./Hero.scss";
import { me2 } from "../../assets/images";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Junoir Full Stack Developer.",
      "UX Designer.",
      "Product Manager",
      "Tutor",
    ],
    loop: true,
    typeSpeed: 17,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="Hero-container">
      <div className="hero-wrapper">
        <div className="hero-1" >
          <h1>
            TRANSFORMING IDEAS INTO <br /> <span>DIGITAL REALITY</span>{" "}
          </h1>
          <h3>
            I am a{" "}
            <span>
              {" "}
              {text}{" "}
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#fff"
              />
            </span>{" "}
          </h3>

          <p className="description">
            As a tech enthusiast and problem solver, I find joy in leveraging
            the power of technology to bring ideas to life and to create
            impactful digital experiences.
          </p>
          <button id="btn" data-aos="fade-up" ><a target="_blank" href="./FabriceResume.pdf">DownLoad Resume</a></button>
        </div>
        <div className="hero-2" data-aos="fade-down">
          <img src={me2} alt="image of me" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
