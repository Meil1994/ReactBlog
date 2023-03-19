import './Home.css'
import Welcome from '../welcome/Welcome'
import Post from '../post/Post';
import React from 'react'; 
import { useState} from 'react';
 
const Nav = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [id, setId] = useState('');
  const [username, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3500/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, username, title, content }),
    });

    if (response.ok) {
      console.log('Succesfully Posted!');
    } else {
      console.error('Failed to Post! Try again..');
    }
  }

  
  function handleChangeWelcome(){
    setCurrentPage('welcome');
  };

  function handleChangePost(){
    setCurrentPage('post');
  };



  return (
    <div className='container-fluid'>
      <div className='row nav-row'>
        <div className='col-md-6 search'>
            <form>
              <input placeholder='Search Post'></input>
              <button>Submit</button>
            </form>
        </div>

        <div className='col-md-6 btn-1'>
            <button onClick={handleChangeWelcome}>HOME</button>
            <button onClick={handleChangePost}>POST</button>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-9 content'>
        {currentPage === 'welcome' ? <Welcome /> : <Post />}
        </div>
        <div className='col-md-3'>
          <div className='box-createpost'>
            <h3>Create Post</h3>
             <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  value={username}
                  onChange={(event) => setUserName(event.target.value)}
                  placeholder='Your Username here'
                  className='post-user'
                />
                <textarea
                  type='text'
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder='Title of the Content'
                  className='post-user title'
                />
                <textarea
                  type='text'
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  placeholder='Input your Content here'
                  className='post-content'
                />
                <button
                 className='post-btn'
                >Click to Post</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav