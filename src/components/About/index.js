// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="image-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="about-sm"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="about-lg"
        alt="about"
      />
    </div>
  </div>
)

export default About
