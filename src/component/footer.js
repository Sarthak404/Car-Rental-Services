
import React from 'react'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../component/footer.css'
const Footer = () => {
  return (
    <footer>
        <div>
          <h2 className='titteam'>Team Members</h2>
          <div className='TeamMember'>
            <h3>Hrushikesh Dube</h3>
            <h3>Sarthak Chaudhari</h3>
            <h3>Rushikesh Dange</h3>
          </div>
        </div>
        <div>
          <h2 className='titsoc'>Social media</h2>
          <div>
            <div className='social'>
            <a href="https://www.instagram.com/sarthakac_10?igsh=MThsOG5lbmlrZjRwcg=="><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=61557486970932&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://linkedin.com/in/sarthak--chaudhari"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer

