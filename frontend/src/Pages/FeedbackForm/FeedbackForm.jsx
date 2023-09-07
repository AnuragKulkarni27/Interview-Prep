import React, { useEffect, useState } from 'react'
import styles from './FeedbackForm.module.css'
import useFeedbackStore from '../../stores/giveFeedback'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../stores/authStore'

const FeedbackForm = () => {
  const navigate = useNavigate()
  const { interviewId, deleteInterview} = useFeedbackStore();

  const {auth} = useAuthStore()
  useEffect(()=>{
    if(!auth?.token) {
      navigate('/')
    }
  },[auth?.token])

  useEffect(()=> {
    if(!interviewId) {
      navigate('/dashboard')
    }
  },[interviewId])

  const [c1,setC1] = useState(false)
  const [c2,setC2] = useState(false)
  const [c3,setC3] = useState(false)
  const [c4,setC4] = useState(false)

  const [cs1,setCs1] = useState(false)
  const [cs2,setCs2] = useState(false)
  const [cs3,setCs3] = useState(false)
  const [cs4,setCs4] = useState(false)

  const [ts1,setTs1] = useState(false)
  const [ts2,setTs2] = useState(false)
  const [ts3,setTs3] = useState(false)
  const [ts4,setTs4] = useState(false)

  const [ls1,setLs1] = useState(false)
  const [ls2,setLs2] = useState(false)
  const [ls3,setLs3] = useState(false)
  const [ls4,setLs4] = useState(false)

  const [r1,setR1] = useState(false)
  const [r2,setR2] = useState(false)
  const [r3,setR3] = useState(false)
  const [r4,setR4] = useState(false)

  const feedbackSubmitHandler = async() => {
    let score = 0;
    if(ls1) {
      score += 1
    }
    else if(ls2) {
      score += 2
    }
    else if(ls3) {
      score += 3
    }
    else {
      score += 4
    }

    if(cs1) {
      score += 1
    }
    else if(cs2) {
      score += 2
    }
    else if(cs3) {
      score += 3
    }
    else {
      score += 4
    }

    if(ts1) {
      score += 1
    }
    else if(ts2) {
      score += 2
    }
    else if(ts3) {
      score += 3
    }
    else {
      score += 4
    }
    
    if(c1) {
      score += 1
    }
    else if(c2) {
      score += 2
    }
    else if(c3) {
      score += 3
    }
    else {
      score += 4
    }
    
    if(r1) {
      score += 1
    }
    else if(r2) {
      score += 2
    }
    else if(r3) {
      score += 3
    }
    else {
      score += 4
    }
    
    const res = axios.get(`${process.env.REACT_APP_API}/api/v1/rooms/room/${interviewId}`)
    await axios.put(`${process.env.REACT_APP_API}/api/v1/user/update-score`,{username: (await res).data.interview.intervieweeName, feedbackScore: score})
    await axios.put(`${process.env.REACT_APP_API}/api/v1/user/update-given`,{username: (await res).data.interview.intervieweeName})
    await axios.put(`${process.env.REACT_APP_API}/api/v1/user/update-taken`,{username: (await res).data.interview.interviewerName})
    await axios.delete(`${process.env.REACT_APP_API}/api/v1/rooms/delete-room`,{interviewRoomId: interviewId})
    deleteInterview()
    navigate('/dashboard')
  }

  return (
    <div className={styles.desktop1}>
      <button className={styles.submitButton} onClick={feedbackSubmitHandler}>
        <div className={styles.submitButtonChild} />
        <div className={styles.submit}>Submit</div>
      </button>
      <textarea
        className={styles.suggestionInput}
        placeholder="Any Other Suggestions..."
      />
      <div className={styles.confidence}>
        <div className={styles.confidenceChild} />
        <div className={styles.confidence1}>Confidence</div>
        <input className={styles.confidenceItem} type="radio" name='confidence' value={c1} onClick={(e) => setC1(!c1)}/>
        <input className={styles.confidenceInner} type="radio" name='confidence' value={c2} onClick={(e) => setC2(!c2)}/>
        <input className={styles.ellipseInput} type="radio" name='confidence' value={c3} onClick={(e) => setC3(!c3)}/>
        <input className={styles.confidenceChild1} type="radio" name='confidence' value={c4} onClick={(e) => setC4(!c4)}/>
      </div>
      <div className={styles.reasonability}>
        <div className={styles.confidenceChild} />
        <div className={styles.reasonability1}>Reasonability</div>
        <input className={styles.reasonabilityItem} type="radio" name='reasonability' value={r1} onClick={(e) => setR1(!r1)}/>
        <input className={styles.reasonabilityInner} type="radio" name='reasonability' value={r2} onClick={(e) => setR2(!r2)}/>
        <input className={styles.reasonabilityChild1} type="radio" name='reasonability' value={r3} onClick={(e) => setR3(!r3)}/>
        <input className={styles.reasonabilityChild2} type="radio" name='reasonability' value={r4} onClick={(e) => setR4(!r4)}/>
      </div>
      <div className={styles.leadershipSkills}>
        <div className={styles.confidenceChild} />
        <div className={styles.leadershipSkills1}>Leadership Skills</div>
        <input className={styles.leadershipSkillsItem} type="radio" name='leadership' value={ls1} onClick={(e) => setLs1(!ls1)}/>
        <input className={styles.leadershipSkillsInner} type="radio" name='leadership' value={ls2} onClick={(e) => setLs2(!ls2)}/>
        <input className={styles.leadershipSkillsChild1} type="radio" name='leadership' value={ls3} onClick={(e) => setLs3(!ls3)}/>
        <input className={styles.leadershipSkillsChild2} type="radio" name='leadership' value={ls4} onClick={(e) => setLs4(!ls4)}/>
      </div>
      <div className={styles.technicalSkills}>
        <div className={styles.confidenceChild} />
        <div className={styles.technicalSkills1}>Technical Skills</div>
        <input className={styles.technicalSkillsItem} type="radio" name='technical' value={ts1} onClick={(e) => setTs1(!ts1)}/>
        <input className={styles.technicalSkillsInner} type="radio" name='technical' value={ts2} onClick={(e) => setTs2(!ts2)}/>
        <input className={styles.technicalSkillsChild1} type="radio" name='technical' value={ts3} onClick={(e) => setTs3(!ts3)}/>
        <input className={styles.technicalSkillsChild2} type="radio" name='technical' value={ts4} onClick={(e) => setTs4(!ts4)}/>
      </div>
      <div className={styles.communicationSkills}>
        <div className={styles.confidenceChild} />
        <div className={styles.communicationSkills1}>Communication Skills</div>
        <input className={styles.leadershipSkillsItem} type="radio" name='communication' value={cs1} onClick={(e) => setCs1(!cs1)}/>
        <input className={styles.leadershipSkillsInner} type="radio" name='communication' value={cs2} onClick={(e) => setCs2(!cs2)}/>
        <input className={styles.leadershipSkillsChild1} type="radio" name='communication' value={cs3} onClick={(e) => setCs3(!cs3)}/>
        <input className={styles.leadershipSkillsChild2} type="radio" name='communication' value={cs4} onClick={(e) => setCs4(!cs4)}/>
      </div>
      <div className={styles.needImprovement}>Need Improvement</div>
      <div className={styles.mediocre}>Mediocre</div>
      <div className={styles.good}>Good</div>
      <div className={styles.marvelous}>Marvelous</div>
      <div className={styles.feedback}>Feedback</div>
    </div>
  )
}

export default FeedbackForm