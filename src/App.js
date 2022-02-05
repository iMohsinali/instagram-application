import "./App.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
function App() {
  const [post, setpost] = useState([]);

  const [open, setopen] = useState(false);
  const [username, setusername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [user, username]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setpost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          p: doc.data(),
        }))
      );
    });
  }, []);
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const singup = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="App">
      <Modal
        open={open}
        onClose={() => setopen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form action="" className="app_signup">
            <center>
              <img
                className="app_headerimg"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
                srcset=""
              />
            </center>
            <input
              placeholder="username"
              type={"text"}
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              placeholder="email"
              type={"text"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={singup}>
              Sign UP
            </Button>
          </form>
        </div>
      </Modal>
      <div className="app_header">
        <img
          className="app_headerimg"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          srcset=""
        />
      </div>

      <Button onClick={() => setopen(true)}>Sign UP</Button>
      {post.map(({ p, id }) => (
        <Post key={id} img={p.img} username={p.username} caption={p.caption} />
      ))}
    </div>
  );
}

export default App;
