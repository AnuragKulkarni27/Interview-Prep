import React from 'react'
import styles from './LoginPage.module.css'
import {Link} from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.loginContainer} />
      <div className={styles.signIn}>Sign in</div>
      <div className={styles.enterMobilePhone}>
        Enter your Username
      </div>
      <input className={styles.passwordContainer} type="text" />
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
      <input className={styles.emailInput} type="text" />
      <div className={styles.continueButtonParent}>
        <button className={styles.continueButton} />
        <div className={styles.continue}>Continue</div>
      </div>
    </div>
  )
}

export default LoginPage