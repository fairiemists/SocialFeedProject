import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";

function App() {
  const [entries, setEntries] = useState([

  ]);

  function newPost(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar word1="Social" word2="Feed" />
      <div className="border-box">
        <CreatePost newPostProperty={newPost} entries={entries} />
      </div>
      <div className="border-box">
        <DisplayPosts postArray={entries} />
      </div>
    </div>
  );
}

export default App;
