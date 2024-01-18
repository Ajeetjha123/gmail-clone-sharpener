import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./store/auth-context";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
const Auth = () => {
  const nevigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const emailinputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = emailinputRef.current
      ? emailinputRef.current.value
      : "";
    const enteredPassword = passwordInputRef.current
      ? passwordInputRef.current.value
      : "";
    const enteredConfirmPassword = confirmPasswordInputRef.current
      ? confirmPasswordInputRef.current.value
      : "";
    if (!isLogin && enteredPassword !== enteredConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2sHH1MU-g17pDj7gfb7pJJaQB9PZcsuU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2sHH1MU-g17pDj7gfb7pJJaQB9PZcsuU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        nevigate("/mail");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Grid item>
        <Card style={{ width: "18rem" }}>
          <CardContent>
            <h2 className="text-center mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handelSubmit}>
              <TextField
                label="Email address"
                type="email"
                variant="filled"
                placeholder="Enter email"
                style={{ width: "100%", marginBottom: "1rem" }}
                inputRef={emailinputRef}
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="filled"
                placeholder="Password"
                style={{ width: "100%", marginBottom: "1rem" }}
                inputRef={passwordInputRef}
                required
              />
              {!isLogin && (
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="filled"
                  placeholder="Confirm Password"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  inputRef={confirmPasswordInputRef}
                  required
                />
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                style={{ borderRadius: "1.5rem", marginBottom: "1rem" }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>
          </CardContent>
          <CardActions>
            <div
              className="text-center"
              onClick={switchAuthModeHandler}
              style={{
                cursor: "pointer",
                backgroundColor: "#BDECFF",
                width: "100%",
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Have an account? Login"}
            </div>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Auth;
