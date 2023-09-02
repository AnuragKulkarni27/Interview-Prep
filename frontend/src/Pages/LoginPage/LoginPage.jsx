import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
import useAuthStore from '../../stores/authStore'

const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { createAuth } = useAuthStore();

  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')

  const handleRegisterFormSubmit = async(e) => {
      e.preventDefault()
      try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/user/login`,{username: username, password: password})
          if(res.data.success) {
              alert(res.data.message)
              createAuth({user: res.data.user,token: res.data.token})
              navigate(location.state ||'/dashboard')
          }
          else {
              alert(res.data.message)
          }
      }
      catch(err) {
          console.log(err)
          alert("Something went wrong!")
      }
  }

  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.loginContainer} />
      <div className={styles.signIn}>Sign in</div>
      <div className={styles.enterMobilePhone}>
        Enter your Username
      </div>
      <input className={styles.passwordContainer} type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <div className={styles.desktop1Item} />
      <Link to='/signup' className={styles.signUp}>Sign up ?</Link>
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
      <input className={styles.emailInput} type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <div className={styles.continueButtonParent}>
        <button className={styles.continueButton} onClick={handleRegisterFormSubmit}/>
        <div className={styles.continue}>Continue</div>
      </div>
    </div>
  )
}

export default LoginPage