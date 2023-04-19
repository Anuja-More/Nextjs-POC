import React, { useEffect} from 'react';
import Link from 'next/link';
import { auth } from "../pages/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styles from '../assets/styles/main/Home.module.scss';
import {useAuthState} from "react-firebase-hooks/auth"

export const Navbar = () => {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
 
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
useEffect(()=>{
  console.log(user)
},[user])
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/" className={styles.header__textlink}>Home</Link>
          <Link href="/electronics" className={styles.header__textlink}>Electronics</Link>
          <Link href="/jewelery" className={styles.header__textlink}>Jewelery</Link>
          <Link href="/menclothing" className={styles.header__textlink}>Men&rsquo; clothing</Link>
          <Link href="/womenclothing" className={styles.header__textlink}>Women&rsquo; clothing</Link>
          <div className="account">
            <div onClick={()=>auth.signOut()} className="account__hint">Hello, {user ? user?.displayName : "User"}
            
            </div>
            <button onClick={login} style={{marginTop:"2px"}}>
             Firebase logIn
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
