
import {
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GithubAuthProvider,
  } from "firebase/auth";
  import { auth } from "../firebase";
import { IUser } from "services/model/user";
  const signInWithGithub = async () => {

    try {
    const resp = await signInWithPopup(auth, new GithubAuthProvider())
     console.log({resp})
    } catch (error) {
        console.log({error})
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const userBuilder =(data : any) : IUser => {
    console.log({data})
      const user: IUser = {
          displayName: data.displayName,
          email: data.email,
          photoUrl: data.photoURL,
          username: data.reloadUserInfo.providerUserInfo[0].screenName,
          lastLogin: data.reloadUserInfo.lastLoginAt,
          createdAt: data.metadata.createdAt,
          accessToken: data.accessToken,
          followers: data.followers,
          following: data.following,
          twitter_username: data.twitter_username,
      };

      return user

  }

  export {signInWithGithub, logout, userBuilder}