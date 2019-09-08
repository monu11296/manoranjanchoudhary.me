import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faLinkedinIn, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faLinkedinIn, faFacebookF, faGithub);

const Contact: React.FC = () => {
    return (

        <div className="row">
                <div className="col-4"></div>
                <div className="col-1">
                    <a href="https://twitter.com/mano11296" target = "_blank" rel = "noopener noreferrer">
                        <FontAwesomeIcon icon={["fab","twitter"]} size="2x" color="#38A1F3"/>
                    </a>
                </div>
                <div className="col-1">
                    <a href="https://www.linkedin.com/in/monu11296/" target = "_blank" rel = "noopener noreferrer">
                        <FontAwesomeIcon icon={["fab","linkedin-in"]} size="2x" color="#0077B5"/>
                    </a>
                </div>
                <div className="col-1">
                    <a href="https://www.facebook.com/monu11296/" target = "_blank" rel = "noopener noreferrer">
                        <FontAwesomeIcon icon={["fab","facebook-f"]} size="2x" color="#4267b2"/>
                    </a>
                </div>
                <div className="col-1">
                    <a href="https://www.github.com/monu11296/" target = "_blank" rel = "noopener noreferrer">
                        <FontAwesomeIcon icon={["fab","github"]} size="2x" color="#000000"/>
                    </a>
                </div>
                <div className="col-4"></div>
        </div> 
    );
  }

export default Contact;