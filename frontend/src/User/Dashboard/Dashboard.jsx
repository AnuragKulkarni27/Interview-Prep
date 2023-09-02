import React from 'react'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.navbar}>
        <div className={styles.navbarChild} />
        <div className={styles.navbarItem} />
        <b className={styles.home}>Home</b>
        <b className={styles.leaderboard}>Leaderboard</b>
        <b className={styles.explore}>Explore</b>
        <b className={styles.more}>More ...</b>
      </header>
      <img
        className={styles.dashboardImageIcon}
        alt=""
        src="/dashboardimage.svg"
      />
      <div className={styles.startFeedbackButton}>
        <div className={styles.startFeedbackButtonChild} />
        <b className={styles.startAMeeting}>Start a Meeting</b>
      </div>
      <div className={styles.joinInterviewButton}>
        <div className={styles.joinInterviewButtonChild} />
        <b className={styles.startAMeeting1}>Join a Meeting</b>
      </div>
      <b className={styles.premiumMeetings}>Premium Meetings</b>
      <div className={styles.nowFreeFor}>Now Free for everyone</div>
    </div>
  )
}

export default Dashboard