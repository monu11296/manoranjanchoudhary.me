import React from 'react';
import styles from './style.module.scss'

import Love from './love'
import Contact from './contact'

const Intro: React.FC = () => {
    return (
      <div>
        <div>
          <p className = {styles.name}>Manoranjan Choudhary here!</p>
          <p className = {styles.profile}>Full Stack Web Developer</p>
          
              <p>Currently Working @ 
                    <a className={styles.link} href = "https://www.redcarpetup.com/" target = "_blank" rel = "noopener noreferrer">
                        RedCarpetUp Tech Pvt Ltd
                    </a>
                </p>
              <br />
              <p>Graduated from Maharishi Dayanand University, Rohtak in 2018<br />with B.Tech in Computer Science.</p>
              <br />
              <Love />
              <br />
              <Contact />
          </div>
      </div>
    );
  }

export default Intro;