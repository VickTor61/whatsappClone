import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Button from "@mui/material/Button";
import whatsapp_background from "./img/WhatsApp_icon.png";
import "./Login.css";

const provider = new GoogleAuthProvider();
const auth = getAuth();


const Login = () => {
  const [{}, dispatch] = useStateValue()
  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch({
          type: actionTypes.SET_USER,
          user: user
        });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="auth">
      <img
        src={whatsapp_background}
        className="auth_img"
        alt="whatsapp_image"
      />
      <Button variant="contained" color="success" onClick={handleSignin}>
        Sign in to whatsapp
      </Button>
      <footer></footer>
    </div>
  );
};

export default Login;
