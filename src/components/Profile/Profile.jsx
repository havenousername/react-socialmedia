import React from 'react';
import styles from './Profile.module.css';
import MyPost from '../Profile/MyPosts/MyPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main className={styles.profile}>
            <ProfileInfo/>
            <MyPost/>
        </main>
    )
}

export default Profile;