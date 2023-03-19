import React, { useState, useEffect } from 'react';
import './Post.css'

const Post = () => {
  const [userData, setUserData] = useState([]);

  async function handleDelete(id){
    const response = await fetch(`http://localhost:3500/user/${id}`, {
      method: 'DELETE'
    });
    if(response.ok){
      console.log(`Post from id ${id} has been deleted`);
      setUserData(userData.filter(user => user.id !== id));
    } else{
      console.error(`Failed to delete post for user: ${id}`);
    }
  }

  async function fetchUserData() {
    const response = await fetch('http://localhost:3500/user');
    const data = await response.json();
    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  

  return (
    <div>
        {userData.map((user) => (
          <div className='box'>
            <h3>{user.title}</h3>
            <p>{user.content}</p>
            <br/>
            <h6>Posted By:{user.username}</h6>
            <button
             onClick={() => handleDelete(user.id)}
            >DELETE</button>
          </div>
        ))}
    </div>
  )
}

export default Post