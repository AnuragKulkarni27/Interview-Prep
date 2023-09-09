import React from 'react'
import styles from './LeaderboardPage.module.css'

const TopCards = ({username,image,pos}) => {
  return (
    <div style={{display: "flex",flexDirection:"column",justifyContent:"center"}}>
        <img className={styles.imagepos} src={image} alt={pos}/>
        <p style={{font:"menu",fontSize:"23px"}}>{username}</p>
    </div>
  )
}

export default TopCards