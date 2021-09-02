import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email"
                        placeholder="Your Email"
                        className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
            <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/TRVL-App'>Testimonials</Link>
            <Link to='/TRVL-App'>Careers</Link>
            <Link to='/TRVL-App'>Investors</Link>
            <Link to='/TRVL-App'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/TRVL-App'>Contact</Link>
            <Link to='/TRVL-App'>Support</Link>
            <Link to='/TRVL-App'>Destinations</Link>
            <Link to='/TRVL-App'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/TRVL-App'>Submit Video</Link>
            <Link to='/TRVL-App'>Ambassadors</Link>
            <Link to='/TRVL-App'>Agency</Link>
            <Link to='/TRVL-App'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/TRVL-App'>Instagram</Link>
            <Link to='/TRVL-App'>Facebook</Link>
            <Link to='/TRVL-App'>Youtube</Link>
            <Link to='/TRVL-App'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/TRVL-App' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/TRVL-App'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/TRVL-App'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/TRVL-App'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/TRVL-App'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/TRVL-App'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
