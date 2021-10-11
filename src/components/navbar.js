import React from 'react';
import styles from './navbar.module.css';
function Nav() {

    return(

        <>
        <div className={`${styles.mobilenav} mobile-nav`}>
    <div className={`${styles.hamburger} hamburger`} >
      <div className={`${styles.line1}`}></div>
      <div className={`${styles.line2}`}></div>
      <div className={`${styles.line3}`}></div>
    </div>
    <h1 className={`${styles.brand}`}>Lorem</h1>
    <a className={`${styles.carticon}`}href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
    </a>
  </div>

  <div className={`${styles.navbar} navbar`}>
    <div className={`${styles.header}`}>
      <h1 className={`${styles.brand}`}>Lorem</h1>
      <h1 className={`${styles.brand}`}>Ipsum</h1>
    </div>
    <ul className={`${styles.navlinks} nav-links`}>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Cuisine</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Book</a></li>
    </ul>
    <a className={`${styles.cartbutton}`}href="#">Cart</a>
  </div>
        
        </>
    );
    
   
  }
  
  export default Nav;