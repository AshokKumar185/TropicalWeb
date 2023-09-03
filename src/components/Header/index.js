import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="nav-left-item-container">
      <li>Home</li>
      <li>About</li>
      <li>Schedules</li>
      <li>Pricing</li>
      <li>Membership</li>
    </ul>
    <ul className="nav-right-item-container">
      <li>Offers</li>
      <li>
        <button type="button" className="courses-btn">
          Courses
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
