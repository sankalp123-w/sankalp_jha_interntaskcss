import React from 'react';
import styles from './mainfood.module.css';
const Mainfood = ()=>{
    return(
<>
<section className={`${styles.content}`}>
    <div className={`${styles.herocontainer}`}>
      <h1>What are you <br />having for Lunch?</h1>
      <div className={`${styles.description}`}>
        <p className={`${styles.descriptiontext}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae minus.</p>
        <div className={`${styles.descriptionline}`}></div>
      </div>
    </div>
    <div className={`${styles.productscarousel} products-carousel`}>
      <div className={`${styles.productcontainer} products-carousel`}>
        <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2028&q=80" alt="Mexican Taco" className={`${styles.image}`}/>
        <p className={`${styles.productname}`}>Mexican Taco</p>
      </div>
      <div className={`${styles.productcontainer} products-carousel`}>
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" alt="Farmhouse Pizza" className={`${styles.image}`}/>
        <p className={`${styles.productname}`}>Farmhouse Pizza</p>
      </div>
      <div className={`${styles.productcontainer} products-carousel`}>
        <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80" alt="Chicken Burger" className={`${styles.image}`}/>
        <p className={`${styles.productname}`}>Chicken Burger</p>
      </div>
      <div className={`${styles.productcontainer} products-carousel`}>
        <img src="https://images.unsplash.com/photo-1568289801407-a1e2b4809aec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Loaded Nachos" className={`${styles.image}`}/>
        <p className={`${styles.productname}`}>Loaded Nachos</p>
      </div>
     
     
     
    </div>
    <div className={`${styles.mobiledescription}`}>
      <p className={`${styles.descriptiontext}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae minus.</p>
      <div className={`${styles.descriptionline}`}></div>
    </div>
  </section>
</>);
}

export default Mainfood;