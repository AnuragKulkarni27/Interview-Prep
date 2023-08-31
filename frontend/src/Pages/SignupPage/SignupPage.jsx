import styles from "./SignupPage.module.css";
import React, { useState } from "react";
import axios from 'axios'

const SignupPage = () => {
    const [username,setUsername] = useState('')
    const [linkedIn,setLinkedIn] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleCreateUser = async(e) => {
        e.preventDefault();
        if(username.trim().length === 0) {
            alert("Enter a Valid Username!");
            return
        }
        if(password.trim().length === 0) {
            alert("Enter a Valid password!");
            return
        }
        if(email.trim().length === 0) {
            alert("Enter a Valid Email!");
            return
        }
        if(linkedIn.trim().length === 0) {
            alert("Enter a Valid LinkedIn")
            return
        }
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/user/register`,{username,password,email,linkedIn});
        if(res.data.success) {
          alert("User Created!");  
        }
        else {
          alert("Something went wrong!")
        }
        setEmail('')
        setLinkedIn('')
        setPassword('')
        setUsername('')
    }

  return (
    <div className={styles.signuppage}>
      <footer className={styles.footer} />
      <div className={styles.signupContainer} />
      <div className={styles.email}>Email</div>
      <div className={styles.password}>Password</div>
      <div className={styles.mobileNumber}>Linked Id</div>
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.yourName}>{`Your name `}</div>
      <img className={styles.signuppageChild} alt="" src="/line.png" />
      <div className={styles.continue}>Continue</div>
      <div className={styles.termsOfService}>Terms of Service</div>
      <div className={styles.privacyPolicy}>Privacy policy</div>
      <div className={styles.copyrightLtd}>© Copyright Ltd.</div>
      <div className={styles.contactUs}>{`Contact Us `}</div>
      <div className={styles.helpSupport}>{`Help & Support`}</div>
      <div className={styles.ankitdonjaimahishmaticom}>
        ankitdon@jaimahishmati.com
      </div>
      <div className={styles.apniHelpKhud}>Apni Help Khud Karle</div>
      <div className={styles.div}>+69 69696969</div>
      <div className={styles.samjha}>Samjha?</div>
      <input className={styles.usernameInput} type="text" value={username} placeholder="Enter your Username" onChange={(e) => {setUsername(e.target.value)}}/>
      <input className={styles.emailInput} type="email" value={email} placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value)}}/>
      <input className={styles.linkedinInput} type="text" value={linkedIn} placeholder="Enter your LinkedIn" onChange={(e) => {setLinkedIn(e.target.value)}}/>
      <input className={styles.passwordInput} type="password" value={password} placeholder="Create password" onChange={(e) => {setPassword(e.target.value)}}/>
      <button className={styles.continueButton} onClick={handleCreateUser}>
        <div className={styles.continueButton1} />
        <div className={styles.continue1}>Continue</div>
      </button>
    </div>
  );
};

export default SignupPage;
