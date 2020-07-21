import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./Header.module.css"

class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <header className={styles.mainHeader}>
                    <div className={styles.innerHeader}>
                        <h1 className={styles.headerTitle}>Todays<span className={styles.secondaryText}>Weather</span>
                        </h1>
                        <FontAwesomeIcon icon="sun" size="3x" className={styles.sunIcon}/>
                    </div>
                </header>
            </React.Fragment>
        )
    }
};

export default Header;