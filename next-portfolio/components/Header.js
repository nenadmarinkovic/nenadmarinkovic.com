import React from 'react'
import Link from 'next/link'
import Toggle from './Toggle'
import styles from '../styles/Header.module.scss'


function Header(props) {
    return (
        <div className="full-container">
            <div className={styles.header}>
                <Link href="/">
                    <a className="homelink">
                        Nenad Marinković
                     </a>
                </Link>
                <Toggle setTheme={props.setTheme} theme={props.theme}  />
            </div>
        </div>
    )
}

export default Header
