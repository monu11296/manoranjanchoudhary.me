import React from 'react';
import styles from './style.module.scss'

import Love from './love'
import Contact from './contact'

const Intro: React.FC = () => {
    return (
      <div>
        <div>
          <p className = {styles.name}>Manoranjan Choudhary here!</p>
          <p className = {styles.profile}>Software Engineer</p>
          
              <p>Currently Working @ 
                    <a href = "https://www.linkedin.com/company/ditto-insurance" target = "_blank" rel = "noopener noreferrer">
                        Ditto Insurance | Finshots
                    </a>
                </p>
              <br />
              <Love />
              <br />
              <Contact />
          </div>
      </div>
    );
  }

export default Intro;
