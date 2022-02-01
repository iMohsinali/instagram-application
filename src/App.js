import "./App.css";
import Post from "./Post";

function App() {
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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
