// Write your code here
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <div className="nav-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="tooltip-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose color="#616e7e" />
          </button>
          <ul className="ul-container">
            <li className="link-item">
              <Link to="/" onClick={() => close()}>
                <div className="home-container">
                  <AiFillHome />
                  <p className="home-about">Home</p>
                </div>
              </Link>
            </li>
            <li className="link-item">
              <Link to="/about" onClick={() => close()}>
                <div className="home-container">
                  <BsInfoCircleFill />
                  <p className="home-about">About</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default withRouter(Header)
