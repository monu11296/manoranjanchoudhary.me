import React from 'react';
import { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'


const Love: React.FC = () => {

    let [displayLove, setDisplayLove]: any = useState([])

    const workStack = [
        'React',
        'TypeScript',
        'JavaScript',
        'PostMan',
        'VSCode',
        'Docker',
        'Python',
        'Redis',
        'APIs',
        'Postgres',
        'SCSS',
        'React Native'
    ]

    const love = [
        'Game Of Thrones',
        'Friends',
        'The Office',
        'Stranger Things',
        'Silicon Valley',
        'Music',
        'Fifa',
        'Technology',
        'Linux',
        'Hackintosh',
        'AMD',
        'Overclocking',
        'Hardware Porn',
        'Video Editing',
        'Delhi', 
        'PubG',
        'IAF'
    ]

    function useInterval(callback: any, delay: any) {
        const savedCallback = useRef(() => {})

        // To Remember the latest callback.
        useEffect(
            () => {savedCallback.current = callback},
            [callback],
        )

        // Set up the interval.
        useEffect(
            () => {
            function tick() {
                savedCallback.current()
            }
            if (delay !== null) {
                let id = setInterval(tick, delay)
                return () => clearInterval(id)
            }
            return
            },
            [delay],
        )
    }
    
    useInterval(() => {
        generate_random()
    }, 1000)


    const generate_random = async () => {
        displayLove = []
        displayLove[0] = workStack[Math.floor(Math.random()*workStack.length)]
        displayLove[1] = love[Math.floor(Math.random()*love.length)]
        setDisplayLove(displayLove)
    }


    return (
        <div>
                <span>
                    <p>I fiddle with</p>
                    <p className={styles.love}>{displayLove[0] ? displayLove[0] : 'React'}</p>
                    <p>& I do</p>
                    <p className={styles.heart}>❤</p>
                    <p className={styles.love}>{displayLove[1] ? displayLove[1] : 'Technology'}</p>
                </span>
            
        </div>
    );
  }

export default Love;
