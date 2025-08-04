import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";

const signUpSuc = () => {
  return {
    type: "SIGN_UP",
  };
};
const signIn = (user) => {
  return {
    type: "SIGN_IN",
    payload: user
  };
};

const logOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
const errorMessage = (msg) => {
  return {
    type: "ERROR",
    payload: msg,
  };
};

//Async Actions

export const signUpAsync = (data) => {
  return async (dispatch) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredential.user)
      dispatch(signUpSuc())
    } catch (err) {
      console.log(err);
      dispatch(errorMessage(err.message));
    }
  };
};


export const signInAsync = (data) => {
  return async (dispatch) => {
    try {
      let userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
    //   console.log(userCredential.user);
        dispatch(signIn(userCredential.user));
    } catch (err) {
      console.log(err);
      dispatch(errorMessage(err.message));
    }
  };
};


export const signINWithGoogleAsync = () => {
  return async (dispatch) => {
    try {
      let Provider = new GoogleAuthProvider();
      let userCredential = await signInWithPopup(auth, Provider);
      console.log(userCredential.user);
        dispatch(signIn(userCredential.user));
    } catch (err) {
      console.log(err);
      dispatch(errorMessage(err.message));
    }
  };
};

export const logOutAsync = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logOut())
    } catch (err) {
      console.log(err);
      dispatch(errorMessage(err.message));
    }
  };
};