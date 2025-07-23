import { motion } from "framer-motion";
import '../Hero.css'

const Hero = () => (
  <section className="section intro">
    <div className="intro-content">
      <motion.img
        src="profile.JPG"
        alt="Meseret Tsega"
        className="profile-pic"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="intro-text">
        <h1>Hi, I'm <span className="highlight">Meseret Tsega</span></h1>
        <p>A passionate Computer Science graduate skilled in web development, graphic design, and networking.</p>
<a href="/Meseret_Tsega_Cv.pdf" download className="btn-gradient">
  Download CV
</a>
      </div>
    </div>
  </section>
);

export default Hero;
