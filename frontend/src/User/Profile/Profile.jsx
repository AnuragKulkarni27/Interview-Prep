import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import axios from 'axios';
import useAuthStore from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()
  const [user,setData] = useState();
  const {auth} = useAuthStore()


  useEffect(() => {
    if(!auth?.token) {
      navigate('/')
    }
  },[auth?.token])

  const getData = async() => {
    const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/user/${auth?.user.username}`)
    setData(res.data.user)
  }

  useEffect(() => {
    if(!auth?.token) {
      return
    }
    else {
      getData()
      console.log(user)
    }
  },[])

  return (
    <div className={styles.desktop1}>
      <header className={styles.desktop1Item} />
      <b className={styles.home1} onClick={() => navigate('/ratings')}>Home</b>
      <b className={styles.dashboard1} onClick={() => navigate('/ratings')}>Dashboard</b>
      <b className={styles.explore1}>Explore</b>
      <b className={styles.more1}>More ...</b>
      <div className={styles.desktop1Inner} />
      <img className={styles.rectangleIcon} alt="" src="/r1.svg" />
      <img className={styles.desktop1Child1} alt="" src="/r2.svg" />
      <img className={styles.desktop1Child2} alt="" src="/r2.svg" />
      <img className={styles.desktop1Child3} alt="" src="/r3.svg" />
      <img className={styles.desktop1Child4} alt="" src="/r4.svg" />
      <div className={styles.scores}>{`Scores `}</div>
      <div className={styles.numberOfInterview}>Number of interview taken</div>
      <img className={styles.desktop1Child5} alt="" src="/r2.svg" />
      <img className={styles.desktop1Child6} alt="" src="/r5.svg" />
      <div className={styles.howdyImAContainer}>
        <p className={styles.howdy}>Howdy!</p>
        <p className={styles.blankLine}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.imAWebDesignerAndDevelop}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>I</span>
            <span>
              'm a web designer and developer. I built CSS-Tricks, a website all
              about building websites, going strong for 1 years.
            </span>
          </span>
        </p>
        <p className={styles.imTheCoFounderOfCodepen}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.imTheCoFounderOfCodepen}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>
              I'm the co-founder of CodePen, a playground for front-end web
              development. It's a social development environment for front end
              designers and developers.
            </span>
          </span>
        </p>
        <p className={styles.imTheCoFounderOfCodepen}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.imTheCoFounderOfCodepen}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>
              Along with Dave Rupert, I'm the co-host of a podcast called
              ShopTalk, a show about (you guessed it), building websites.
            </span>
          </span>
        </p>
        <p className={styles.imTheCoFounderOfCodepen}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.imTheCoFounderOfCodepen}>
          <span className={styles.imAWebDesignerAndDevelop1}>
            <span>
              I've spoken at events and given workshops all over the world.
            </span>
          </span>
        </p>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.aashuKumar}>{user?.username}</div>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="/user.png" />
          <div className={styles.frameChild} />
        </div>
        <div className={styles.editProfile}>{`Edit Profile `}</div>
        <div className={styles.userInfoChild} />
        <div className={styles.bhilaiIndia}>Bhilai, India</div>
        <img className={styles.image4Icon1} alt="" src="/user-small.png" />
        <div className={styles.aashu90}>{user?.username}</div>
        <img className={styles.image5Icon} alt="" src="/location.png" />
        <img className={styles.image6Icon} alt="" src="/mail.png" />
        <div className={styles.aashukumargmailcom}>{user?.email}</div>
        <img className={styles.image7Icon} alt="" src="/linkedin.png"  onClick={() => window.open(user?.linkedIn, "_blank")}/>
        <div className={styles.aashuk90} onClick={() => window.open(user?.linkedIn, "_blank")}>{user?.linkedIn}</div>
      </div>
      <div className={styles.numberOfInterview1}>Number of Interview given</div>
      <div className={styles.div}>{user?.score}/{Math.pow(10,user?.score.toString().length)}</div>
      <div className={styles.div1}>{user?.interviewTaken}/{Math.pow(10,user?.interviewTaken.toString().length)}</div>
      <div className={styles.div2}>{user?.interviewGiven}/{Math.pow(10,user?.interviewGiven.toString().length)}</div>
    </div>
  )
}

export default Profile