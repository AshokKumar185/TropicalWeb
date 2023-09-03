import {Component} from 'react'
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from 'react-icons/hi'
import Header from '../Header'
import './index.css'

class Course extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div className="top-bg-container">
            <div className="details-container">
              <img
                src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731205/Ellipse_46_nssods.png"
                alt="elipse"
                width={30}
                className="elipse-img"
              />
              <p className="desc">Discover the beauty of the tropics</p>
              <h1 className="top-heading">
                Tropical Destinations{' '}
                <span className="top-span">For Student</span>
              </h1>
              <p className="detail-desc">
                Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
                bibendum integer rutrum nisi. A nec nisl vitae
              </p>
              <button type="button" className="signup-btn">
                SIGN UP
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731205/Ellipse_49_vexzyt.png"
              alt="ellipse"
              width={30}
            />
            <img
              src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693730969/Group_171_wgfqkr.png"
              alt="course img"
              width={300}
            />
          </div>

          <div className="center-bg-container">
            <div className="center-img">
              <img
                src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731504/Subtract_1_wrc4t1.png"
                alt="round"
                width={110}
              />
            </div>
            <div className="center-card-container">
              <ul className="card-list-container">
                <li className="card-list-item">
                  <img
                    src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731204/avatar_aqkekr.png"
                    alt="card logo"
                  />
                  <div>
                    <h1 className="avatar-heading">Jenny Wilson</h1>
                    <p className="avatar-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </p>
                  </div>
                </li>
                <li className="card-list-item">
                  <img
                    src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731202/avatar_1_n1r4qu.png"
                    alt="card logo"
                  />
                  <div>
                    <h1 className="avatar-heading">Jenny Wilson</h1>
                    <p className="avatar-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </p>
                  </div>
                </li>
                <li className="card-list-item">
                  <img
                    src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731201/avatar_2_tfsflh.png"
                    alt="card logo"
                  />
                  <div>
                    <h1 className="avatar-heading">Jenny Wilson</h1>
                    <p className="avatar-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </p>
                  </div>
                </li>
              </ul>
              <div>
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731205/Ellipse_46_nssods.png"
                  alt="elipse"
                  width={30}
                  className="elipse-img"
                />
                <div className="center-details-container">
                  <h1 className="center-heading">
                    Tropical Destinations{' '}
                    <span className="center-span">For Student</span>
                  </h1>
                  <p className="center-desc">
                    Student Tropical Vacation: Relax and Recharge
                  </p>
                  <ul className="list-container">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                  </ul>
                  <button type="button" className="explore-btn">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="destination-bg-container">
            <h1 className="destination">Our Destinations</h1>
            <ul className="destination-list-container">
              <li className="destination-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731201/card-image_2_oa3e8f.png"
                  alt="destination img"
                  width={280}
                />
                <h1 className="destination-heading">Harvard University</h1>
                <div className="destination-btn-align">
                  <p className="destination-desc">
                    Cambridge, Massachusetts, UK
                  </p>
                  <button type="button" className="more-btn">
                    ...
                  </button>
                </div>
              </li>
              <li className="destination-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731200/card-image_3_am9i2b.png"
                  alt="destination img"
                  width={280}
                />
                <h1 className="destination-heading">Oxford University</h1>
                <div className="destination-btn-align">
                  <p className="destination-desc">Oxford, England</p>
                  <button type="button" className="more-btn">
                    ...
                  </button>
                </div>
              </li>
              <li className="destination-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731199/card-image_4_ede9yr.png"
                  alt="destination img"
                  width={280}
                />
                <h1 className="destination-heading">Stanford University</h1>
                <div className="destination-btn-align">
                  <p className="destination-desc">Stanford, California</p>
                  <button type="button" className="more-btn">
                    ...
                  </button>
                </div>
              </li>
              <li className="destination-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731199/card-image_5_etaucm.png"
                  alt="destination img"
                  width={280}
                  height={275}
                />
                <h1 className="destination-heading">
                  Nanyang Technological University
                </h1>
                <div className="destination-btn-align">
                  <p className="destination-desc">Nanyang Ave, Singapura</p>
                  <button type="button" className="more-btn">
                    ...
                  </button>
                </div>
              </li>
            </ul>
            <div className="arrow-container">
              <HiOutlineArrowNarrowLeft className="left-arrow" />{' '}
              <p className="dark-num">
                2 <span className="light-num">/143</span>
              </p>{' '}
              <HiOutlineArrowNarrowRight className="right-arrow" />
            </div>
          </div>

          <div className="discount-container">
            <div className="center-details-container">
              <div className="ellipse-container">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731205/Ellipse_46_nssods.png"
                  alt="ellipse"
                  width={30}
                />
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731798/Subtract_2_tudrog.png"
                  alt="round"
                />
              </div>
              <p className="center-desc">Get 20% off for student</p>
              <h1 className="discount-heading">
                Student discounts available.
                <span>
                  {' '}
                  <img
                    src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731205/Ellipse_49_vexzyt.png"
                    alt="round"
                    width={30}
                  />
                </span>
              </h1>
              <h2 className="discount-span">
                {' '}
                Get ready for some fun in the sun!
              </h2>
              <ul className="list-container">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit</li>
                <li>tortor id euismod habitant</li>
                <li>Sed suspendisse id in ultrices</li>
              </ul>
              <button type="button" className="explore-btn">
                Explore More
              </button>{' '}
              <br />
              <div className="climpse-container">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731937/Ellipse_54_azfx3u.png"
                  alt="climpse"
                  className="climpse-img"
                />
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731198/Mask_group_cv0ked.png"
              alt="discount img"
              width={320}
            />
          </div>

          <div className="book-now-bg-container">
            <div className="img-round-container">
              <img
                src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731198/Group_167_ovyirf.png"
                alt="book img"
                width={370}
              />
              <div className="round-container">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693731798/Subtract_2_tudrog.png"
                  alt="round"
                />
              </div>
            </div>
            <form className="book-now-card-container">
              <h1>Book Now</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <label htmlFor="city">CITY</label> <br />
              <input type="text" id="city" className="city-input" />
              <div className="input-main-container">
                <div className="input-container">
                  <label htmlFor="arrival">ARRIVAL</label> <br />
                  <input
                    type="text"
                    id="arrival"
                    className="arrival-input"
                    placeholder="10 October"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="Departure">DEPARTURE</label> <br />
                  <input
                    type="text"
                    id="Departure"
                    className="arrival-input"
                    placeholder="11 October"
                  />
                </div>
              </div>
              <div className="input-main-container">
                <div className="input-container">
                  <label htmlFor="star">STAR</label> <br />
                  <button type="button" className="minus-btn">
                    -
                  </button>
                  <input
                    type="number"
                    id="star"
                    className="star-input"
                    placeholder="4"
                  />
                  <button type="button" className="plus-btn">
                    +
                  </button>
                </div>
                <div className="input-container">
                  <label htmlFor="room">ROOM</label> <br />
                  <button type="button" className="minus-btn">
                    -
                  </button>
                  <input
                    type="number"
                    id="room"
                    className="star-input"
                    placeholder="1"
                  />
                  <button type="button" className="plus-btn">
                    +
                  </button>
                </div>
              </div>
              <button type="submit" className="book-now-btn">
                Book Now
              </button>
            </form>
          </div>

          <div className="testimonials-bg-container">
            <h1>Testimonials</h1>
            <ul className="testi-list-container">
              <li className="testi-list-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693732052/Avatar_3_u0tlta.png"
                  alt="testi img"
                />
                <p className="testi-name">Corey Korsgaard</p>
                <hr />
                <p className="testi-desc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </li>
              <li className="testi-list-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693732051/Avatar_4_fyenpr.png"
                  alt="testi img"
                />
                <p className="testi-name">Jakob Aminoff</p>
                <hr />
                <p className="testi-desc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </li>
              <li className="testi-list-item">
                <img
                  src="https://res.cloudinary.com/dorh4kb0v/image/upload/v1693732049/Avatar_5_kceoxz.png"
                  alt="testi img"
                />
                <p className="testi-name">Carla Press</p>
                <hr />
                <p className="testi-desc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </li>
            </ul>

            <h1 className="footer-heading">
              Student Special: Discounted rates on tropical getaways!
            </h1>
            <p className="footer-desc">
              Let’s embody your beautiful ideas together, simplify the way you
              visualize your next big things.
            </p>
            <ul className="testimonials-list-container">
              <li>Privacy policy</li>
              <li>Terms use</li>
              <li>Sales and Refunds</li>
              <li>Legal</li>
              <li>About</li>
              <li>Schedules</li>
              <li>Pricing</li>
              <li>Membership</li>
              <li>Joins</li>
              <li>|</li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Course
