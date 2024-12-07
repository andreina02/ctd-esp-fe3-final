import React from 'react'
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' className={footerStyles.logo} />
        <div className={footerStyles.socialIcons}>
          <img src="./images/ico-facebook.png" alt='Facebook-logo' />
          <img src="./images/ico-instagram.png" alt='Instagram-logo' />
          <img src="./images/ico-tiktok.png" alt='Tiktok-logo' />
          <img src="./images/ico-whatsapp.png" alt='Whatsapp-logo' />
        </div>
        
    </footer>
  )
}

export default Footer
