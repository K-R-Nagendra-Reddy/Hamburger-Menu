// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-container">
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
          className="about-image"
        />
      </button>
    </div>
  </div>
)

export default About
