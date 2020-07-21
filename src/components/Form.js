import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Form.module.css";

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getLocation}>
                <input placeholder="Enter your city or country name" type="text" id="cityName" className={styles.inputForm}/>
                <span id={styles.iconSubmit} onClick={this.props.getLocation}>
                    <FontAwesomeIcon icon="search" className={styles.searchIcon} />
                </span>
            </form>
        );
    };
};

export default Form;