import React from 'react';
import styles from './style.module.scss'

import Avatar from './assets/image/mano.jpg'

import Intro from './components/intro'


const App: React.FC = () => {
    return (
    <div className="container-fluid">
        <div className={`${styles.App} row`}>
            <div className="col-12">
                <header>
                    <h1 className={styles.AppHeader}>Hello People!</h1>
                    <img className={styles.Avatar} src={Avatar} alt="Manoranjan"/>
                </header>
                <Intro />
            </div>
        </div>
    </div>
    );
}

export default App;
