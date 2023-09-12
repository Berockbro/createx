import React from "react";
import styles from "./Header.module.css"
import Text from "./Text";
function Header (){
    return(
        <div className={styles.container}>
            <Text color={"green"} textSize={"16px"}>Text</Text>
        </div>
    )
}

export default Header;