import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './style.module.scss'

library.add(faTwitter, faLinkedinIn, faInstagram, faGithub);

const Contact: React.FC = () => {
    return (

        <div className="row">
            <div className='col-12'>
                <div className="row">
                    <div className="col-lg-4 col-2"></div>
                    <div className="col-lg-1 col-2">
                        <a href="https://twitter.com/mano11296" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="#ffffff" />
                        </a>
                    </div>
                    <div className="col-lg-1 col-2">
                        <a href="https://www.linkedin.com/in/monu11296/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" color="#ffffff" />
                        </a>
                    </div>
                    <div className="col-lg-1 col-2">
                        <a href="https://www.instagram.com/monu11296/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" color="#ffffff" />
                        </a>
                    </div>
                    <div className="col-lg-1 col-2">
                        <a href="https://www.github.com/monu11296/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="#ffffff" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-2"></div>
                </div>
            </div>
            <div className='col-12'>
                <div className={`${styles.footer} row footer text-center`}>
                    <div className="col-12">
                        <h4 style={{ fontSize: '0.7rem' }}>
                            email:&nbsp;
                            <a href="mail@manoranjanchoudhary.com">
                                mail@manoranjanchoudhary.com
                            </a>
                        </h4>
                        <h4 style={{ fontSize: '1rem' }}>© 2020 manoranjanchoudhary.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
