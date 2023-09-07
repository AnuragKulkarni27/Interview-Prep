import styles from "./LeaderboardPage.module.css";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";

const LeaderboardPage = () => {
  const {auth} = useAuthStore()
  const navigate = useNavigate()
  const handleClick = () => {
    if(auth?.user) {
      navigate('/dashboard')
    }
    else {
      navigate('/')
    }
  }
  return (
    <div className={styles.leaderboardpage}>
      <header className={styles.leaderboardpageChild} />
      {auth?.user && (<b className={styles.dashboard} onClick={handleClick}>Dashboard</b>)}
      <b className={styles.home} onClick={handleClick}>Home</b>
      <b className={styles.explore} onClick={handleClick}>Explore</b>
      <b className={styles.more}>More ...</b>
      <div className={styles.leaderboardpageItem} />
      <img className={styles.image1Icon} alt="" src="/rank-1.png" />
      <b className={styles.stPlaceText}>Aashu</b>
      <b className={styles.ndPlaceText}>Ankit</b>
      <b className={styles.rdPlaceText}>Anurag</b>
      <img className={styles.image2Icon} alt="" src="/rank-2.png" />
      <img className={styles.image3Icon} alt="" src="/rank-3.png" />
      <div className={styles.leaderboardpageInner} />
      <div className={styles.randomNames}>prakriti</div>
      <div className={styles.div}>400</div>
      <div className={styles.div1}>30</div>
      <div className={styles.div2}>4</div>
      <div className={styles.randomNames1}>Anurag Kulkarni</div>
      <div className={styles.div3}>300</div>
      <div className={styles.div4}>20</div>
      <div className={styles.div5}>5</div>
      <div className={styles.randomNames2}>Anant Kumar Singh</div>
      <div className={styles.div6}>200</div>
      <div className={styles.div7}>10</div>
      <div className={styles.div8}>6</div>
      <div className={styles.randomNames3}>Aashu</div>
      <div className={styles.div9}>100</div>
      <div className={styles.div10}>5</div>
      <div className={styles.div11}>7</div>
      <div className={styles.randomNames4}>Prakriti Keshri</div>
      <div className={styles.div12}>78</div>
      <div className={styles.div13}>4</div>
      <div className={styles.div14}>8</div>
      <div className={styles.randomNames5}>Anu</div>
      <div className={styles.div15}>65</div>
      <div className={styles.div16}>3</div>
      <div className={styles.div17}>9</div>
      <div className={styles.randomNames6}>Ayushman Khurana</div>
      <div className={styles.div18}>50</div>
      <div className={styles.div19}>1</div>
      <div className={styles.div20}>10</div>
      <div className={styles.randomNames7}>Aruragini</div>
      <div className={styles.div21}></div>
      <div className={styles.div22}></div>
      <div className={styles.div23}></div>
      <div className={styles.randomNames8}>Ankita</div>
      <div className={styles.div24}>12</div>
      <div className={styles.div25}>12</div>
      <div className={styles.div26}>12</div>
      <div className={styles.randomNames9}>Sanskar</div>
      <div className={styles.div27}>4)</div>
      <div className={styles.div28}>4)</div>
      <div className={styles.div29}>4)</div>
      <div className={styles.randomNames10}>Random Names</div>
      <div className={styles.div30}>4)</div>
      <div className={styles.div31}>4)</div>
      <div className={styles.div32}>4)</div>
      <div className={styles.randomNames11}>Random Names</div>
      <div className={styles.div33}>4)</div>
      <div className={styles.div34}>4)</div>
      <div className={styles.div35}>4)</div>
      <div className={styles.randomNames12}>Random Names</div>
      <div className={styles.div36}>{`4)  `}</div>
      <div className={styles.div37}>{`4)  `}</div>
      <div className={styles.div38}>{`4)  `}</div>
      <div className={styles.randomNames13}>Random Names</div>
      <div className={styles.div39}>{`4)  `}</div>
      <div className={styles.div40}>{`4)  `}</div>
      <div className={styles.div41}>{`4)  `}</div>
      <div className={styles.randomNames14}>Random Names</div>
      <div className={styles.div42}>{`4)  `}</div>
      <div className={styles.div43}>{`4)  `}</div>
      <div className={styles.div44}>{`4)  `}</div>
      <div className={styles.randomNames15}>Random Names</div>
      <div className={styles.div45}>{`4)  `}</div>
      <div className={styles.div46}>{`4)  `}</div>
      <div className={styles.div47}>{`4)  `}</div>
      <div className={styles.randomNames16}>Random Names</div>
      <div className={styles.div48}>{`4)  `}</div>
      <div className={styles.div49}>{`4)  `}</div>
      <div className={styles.div50}>{`4)  `}</div>
      <div className={styles.randomNames17}>Random Names</div>
      <div className={styles.div51}>{`4) `}</div>
      <div className={styles.div52}>{`4) `}</div>
      <div className={styles.div53}>{`4) `}</div>
      <div className={styles.randomNames18}>Random Names</div>
      <div className={styles.div54}>{`4)  `}</div>
      <div className={styles.div55}>{`4)  `}</div>
      <div className={styles.div56}>{`4)  `}</div>
      <div className={styles.rank}>Rank</div>
      <div className={styles.name}>Name</div>
      <div className={styles.points}>Points</div>
      <div className={styles.noOfInterviews}>No. of Interviews</div>
      <div className={styles.lineDiv} />
      <div className={styles.leaderboardpageChild1} />
      <div className={styles.leaderboardpageChild2} />
      <div className={styles.leaderboardpageChild3} />
      <div className={styles.leaderboardpageChild4} />
      <div className={styles.leaderboardpageChild5} />
      <div className={styles.leaderboardpageChild6} />
      <div className={styles.leaderboardpageChild7} />
      <div className={styles.leaderboardpageChild8} />
      <div className={styles.leaderboardpageChild9} />
      <div className={styles.leaderboardpageChild10} />
      <div className={styles.leaderboardpageChild11} />
      <div className={styles.leaderboardpageChild12} />
      <div className={styles.leaderboardpageChild13} />
      <div className={styles.leaderboardpageChild14} />
      <div className={styles.leaderboardpageChild15} />
      <div className={styles.leaderboardpageChild16} />
      <div className={styles.leaderboardpageChild17} />
      <div className={styles.leaderboardpageChild18} />
      <div className={styles.leaderboardpageChild19} />
      <img className={styles.image4Icon} alt="" src="/user.png" />
      <img className={styles.image5Icon} alt="" src="/user.png" />
      <img className={styles.image6Icon} alt="" src="/user.png" />
      <div className={styles.ellipseDiv} />
      <div className={styles.leaderboardpageChild20} />
      <div className={styles.leaderboardpageChild21} />
    </div>
  );
};

export default LeaderboardPage;
