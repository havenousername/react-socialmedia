import React from 'react';
import styles from '../Nav.module.css';



const Friends = (props) => {
  return (
      <div className={styles.friend}>
        <div className={styles.text}>
          <div className={styles.names}>{props.name}</div>
        </div>
        <div className={styles.divimg}>
          <img className={styles.image} src={props.image} alt={'image'}/>
        </div>
      </div>
  )
};

export default Friends;