import { useCallback, useEffect, useRef } from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from 'react-router-dom'
import useAuthStore from "../../stores/authStore";


const LandingPage = () => {
  const navigate = useNavigate()
  const ref = useRef(null)

//
  const {auth} = useAuthStore()
  useEffect(() => {
    if(auth?.token) {
      navigate('/dashboard')
    }
  },[auth?.token])

  //
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onWeGotYouClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='preparingForJobs']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.desktop2}>
      <section className={styles.desktop2Child} />
      <img
        className={styles.front1Icon}
        alt=""
        src="/front-top-image.png"
        data-animate-on-scroll
      />
      <h1
        className={styles.preparingForJobs}
        data-scroll-to="preparingForJobs"
      >{`Preparing for jobs? `}</h1>
      <img className={styles.desktop2Item} alt="" src="/line.png" />
      <h3 className={styles.weGotYou} onClick={onWeGotYouClick}>
        We got you ...
      </h3>
      <h3 className={styles.exploreWithUs}>Explore With us</h3>
      <section className={styles.desktop2Inner} ref={ref}/>
      <div className={styles.lineDiv} />
      <section className={styles.weArePassionateContainer}>
        <p className={styles.weArePassionate}>
          We are passionate for helping our clients prepare and succeed in their
          interviews
        </p>
        <p
          className={styles.weArePassionate}
        >{`We have helped many people prepare for their dream jobs, and we are `}</p>
        <p className={styles.weArePassionate}>
          confident that we can help you too. Feel comfortable and join with us
        </p>
      </section>
      <section className={styles.pexelsKarolinaGrabowska4491} />
      <section className={styles.rectangleSection} />
      <section className={styles.ashishAndAashu} />
      <div className={styles.joinFromYourContainer}>
        <p
          className={styles.weArePassionate}
        >{`Join from your computer using any web browser. `}</p>
        <p className={styles.weArePassionate}>
          No software is needed to install.
        </p>
        <p className={styles.weArePassionate}>
          Guests can even join meetings and calls from their own respective
          browser
        </p>
      </div>
      <h3 className={styles.howToUtilise}>How To Utilise</h3>
      <img
        className={styles.pexelsSamLion57095691Icon}
        alt=""
        src="/image-1.png"
      />
      <div className={styles.easyToUse}>Easy to use</div>
      <img
        className={styles.pexelsAnnaShvets37274631Icon}
        alt=""
        src="/image-2.png"
      />
      <div className={styles.image1Parent}>
        <div className={styles.learningIsntJustContainer}>
          <p
            className={styles.weArePassionate}
          >{`Learning isn't just limited to classes with our practice `}</p>
          <p className={styles.weArePassionate}>
            section challenge yourself and earn rewards.
          </p>
          <p
            className={styles.weArePassionate}
          >{`Record and analyze your performance. Compete with others `}</p>
          <p
            className={styles.weArePassionate}
          >{`and finish top in leaderboard `}</p>
        </div>
      </div>
      <div className={styles.trackYourProgress}>Track your progress</div>
      <img
        className={styles.pexelsSoraShimazaki5673488Icon}
        alt=""
        src="/image-3.png"
      />
      <div className={styles.succeedWithYour}>Succeed with your peers</div>
      <div className={styles.multipleMeetingsFor}>
        Multiple meetings for you to practice. Come and join one of the largest
        tech communities with hundreds of thousands of active users
      </div>
      <div className={styles.desktop2Child1} />
      <button className={styles.rectangleParent} onClick={() => {navigate('/signup')}}>
        <div className={styles.frameChild} />
        <div className={styles.signUp}>Sign Up</div>
      </button>
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
      <button className={styles.rectangleGroup} onClick={() => {navigate('/login')}}>
        <div className={styles.frameItem} />
        <div className={styles.logIn}>Log In</div>
      </button>
      <nav className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <button className={styles.exploreWrapper} onClick={() => handleClick()}>
          <div className={styles.explore}>Explore</div>
        </button>
        <button className={styles.leaderboardWrapper} onClick={() => navigate('/ratings')}>
          <div className={styles.explore}>Leaderboard</div>
        </button>
        <button className={styles.aboutUsWrapper}>
          <div className={styles.explore}>About us</div>
        </button>
        <button className={styles.contactUsWrapper}>
          <div className={styles.explore}>Contact us</div>
        </button>
      </nav>
    </div>
  );
};

export default LandingPage;
