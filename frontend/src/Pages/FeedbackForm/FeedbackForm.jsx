import React from 'react'
import styles from './FeedbackForm.module.css'

const FeedbackForm = () => {
  return (
    <div className={styles.desktop1}>
      <button className={styles.submitButton}>
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
        <input className={styles.confidenceItem} type="radio" />
        <input className={styles.confidenceInner} type="radio" />
        <input className={styles.ellipseInput} type="radio" />
        <input className={styles.confidenceChild1} type="radio" />
      </div>
      <div className={styles.reasonability}>
        <div className={styles.confidenceChild} />
        <div className={styles.reasonability1}>Reasonability</div>
        <input className={styles.reasonabilityItem} type="radio" />
        <input className={styles.reasonabilityInner} type="radio" />
        <input className={styles.reasonabilityChild1} type="radio" />
        <input className={styles.reasonabilityChild2} type="radio" />
      </div>
      <div className={styles.leadershipSkills}>
        <div className={styles.confidenceChild} />
        <div className={styles.leadershipSkills1}>Leadership Skills</div>
        <input className={styles.leadershipSkillsItem} type="radio" />
        <input className={styles.leadershipSkillsInner} type="radio" />
        <input className={styles.leadershipSkillsChild1} type="radio" />
        <input className={styles.leadershipSkillsChild2} type="radio" />
      </div>
      <div className={styles.technicalSkills}>
        <div className={styles.confidenceChild} />
        <div className={styles.technicalSkills1}>Technical Skills</div>
        <input className={styles.technicalSkillsItem} type="radio" />
        <input className={styles.technicalSkillsInner} type="radio" />
        <input className={styles.technicalSkillsChild1} type="radio" />
        <input className={styles.technicalSkillsChild2} type="radio" />
      </div>
      <div className={styles.communicationSkills}>
        <div className={styles.confidenceChild} />
        <div className={styles.communicationSkills1}>Communication Skills</div>
        <input className={styles.leadershipSkillsItem} type="radio" />
        <input className={styles.leadershipSkillsInner} type="radio" />
        <input className={styles.leadershipSkillsChild1} type="radio" />
        <input className={styles.leadershipSkillsChild2} type="radio" />
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