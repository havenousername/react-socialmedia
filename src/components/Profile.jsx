import React from 'react';

const Profile = () => {
  return (
    <main className="profile">
      <div className="main-img-div">
        <img src={"https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"} className="main-image" alt="content" />
      </div>
      <div className="content">
        <div className="avatar">
          <img src={"https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg"} alt="avatar" />
        </div>
        description
        </div>
      <div className="my-posts">
        My posts
          <div className="new-posts">
          New posts
            <article>Post one</article>
          <article>Post two</article>
        </div>
      </div>
    </main>
  )
}

export default Profile;