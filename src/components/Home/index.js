// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="image-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-sm"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-lg"
        alt="home"
      />
    </div>
  </div>
)

export default Home
