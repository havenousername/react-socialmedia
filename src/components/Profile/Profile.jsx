import React from 'react';
import styles from './Profile.module.css';
import MyPost from '../Profile/MyPosts/MyPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main className={styles.profile}>
            <ProfileInfo/>
            <MyPost postData={props}/>
        </main>
    )
};

export default Profile;