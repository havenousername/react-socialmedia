import React from 'react';
import styles from './Profile.module.css';
import MyPost from '../Profile/MyPosts/MyPost'

const Profile = () => {
  return (
    <main className={styles.profile}>
      <div className={styles.imgwrapper}>
        <img src={"https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"} className={styles.image} alt="content" />
      </div>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={"https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg"} alt="avatar" className={styles.avatar__img}/>
        </div>
        description
        <MyPost />
      </div>
    </main>
  )
}

export default Profile;