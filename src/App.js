import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
// import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
// import Post from './Components/Post/Post';

function App() {

  const [entries, setEntries] = useState([{ }])

  return (
    <div>
      <NavBar word1='Social' word2='Feed'/>
      <div className='border-box'>
        <CreatePost/>
      </div>
      {/* <DisplayPosts/> */}
      {/* <Post/> */}
    </div>
  );
}

export default App;
