import "./App.css";
import Post from "./Post";
import { useState } from "react";
function App() {
  const [post, setpost] = useState([
    {
      img: "https://avatars.githubusercontent.com/u/87361294?s=400&u=05e7fd06becf37bdcc0ad0b4f3fa88bdf1faa5a9&v=4",
      username: "mrprogrammer",
      caption: "wow its working",
    },
    {
      img: "https://avatars.githubusercontent.com/u/87361294?s=400&u=05e7fd06becf37bdcc0ad0b4f3fa88bdf1faa5a9&v=4",
      username: "myup",
      caption: "wow thus is awsome",
    },
  ]);
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
