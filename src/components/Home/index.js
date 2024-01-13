// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="home-image"
        />
      </button>
    </div>
  </div>
)

export default Home
