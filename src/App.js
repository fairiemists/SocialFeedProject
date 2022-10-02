import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [entries, setEntries] = useState([{ }])

  function newPost(entry){
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar word1='Social' word2='Feed'/>
      <div className='border-box'>
        <CreatePost newPostProperty={newPost}/>
      </div>
      <div className='border-box'>
        <DisplayPosts/>
      </div>
    </div>
  );
}

export default App;
