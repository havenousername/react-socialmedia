import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <main className={styles.profile}>
            <ProfileInfo/>
            <MyPostContainer store={props.store} />
        </main>
    )
};

export default Profile;