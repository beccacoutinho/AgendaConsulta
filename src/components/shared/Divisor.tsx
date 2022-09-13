import styles from "../../styles/Divisor.module.css"
export default function Divisor(){
    return(
        <div className={styles.divisor}>
            <span className={styles.line}></span>
            <p>ou</p>
            <span className={styles.line}></span>
        </div>
    )
}