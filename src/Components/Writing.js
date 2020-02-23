import React from "react";
const styles = {color:  "#BE6E46"}
const date = new Date();
const hours = date.getHours();


if (hours<12) {
    styles.color = "#BE6E46"
}
else {
    styles.color="#AB45BB"
}





function Alo() {
    return (
        <h1 style={styles}>alo</h1>
    )
}
export default Alo;