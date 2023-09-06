import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.desktop1}>
      <b className={styles.home}>Home</b>
      <b className={styles.dashboard}>Dashboard</b>
      <b className={styles.explore}>Explore</b>
      <b className={styles.more}>More ...</b>
      <div className={styles.desktop1Child} />
      <header className={styles.desktop1Item} />
      <b className={styles.home1}>Home</b>
      <b className={styles.dashboard1}>Dashboard</b>
      <b className={styles.explore1}>Explore</b>
      <b className={styles.more1}>More ...</b>
      <div className={styles.desktop1Inner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-5.svg" />
      <img className={styles.desktop1Child1} alt="" src="/rectangle-6.svg" />
      <img className={styles.desktop1Child2} alt="" src="/rectangle-6.svg" />
      <img className={styles.desktop1Child3} alt="" src="/rectangle-9.svg" />
      <img className={styles.desktop1Child4} alt="" src="/rectangle-10.svg" />
      <div className={styles.scores}>{`Scores `}</div>
      <div className={styles.numberOfInterview}>Number of interview taken</div>
      <img className={styles.desktop1Child5} alt="" src="/rectangle-6.svg" />
      <img className={styles.desktop1Child6} alt="" src="/rectangle-11.svg" />
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
        <div className={styles.aashuKumar}>Aashu Kumar</div>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <div className={styles.frameChild} />
        </div>
        <div className={styles.editProfile}>{`Edit Profile `}</div>
        <div className={styles.userInfoChild} />
        <div className={styles.bhilaiIndia}>Bhilai , India</div>
        <img className={styles.image4Icon1} alt="" src="/image-41@2x.png" />
        <div className={styles.aashu90}>@Aashu.90</div>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <div className={styles.aashukumargmailcom}>aashukumar@gmail.com</div>
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <div className={styles.aashuk90}>aashuk90</div>
      </div>
      <div className={styles.numberOfInterview1}>Number of Interview given</div>
      <div className={styles.div}>(0 - 10)</div>
      <div className={styles.div1}>(0 - 10)</div>
      <div className={styles.div2}>(0 - 10)</div>
    </div>
  )
}

export default Profile