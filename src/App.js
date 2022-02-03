import "./App.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "./firebase";
function App() {
  const [post, setpost] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setpost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerimg"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          srcset=""
        />
      </div>
      {post.map((p) => (
        <Post img={p.img} username={p.username} caption={p.caption} />
      ))}
    </div>
  );
}

export default App;
