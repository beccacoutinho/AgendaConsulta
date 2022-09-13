import styles from "../../styles/Card.module.css"
import icone from "../../img/Union.png"
import moca from "../../img/how-works-removebg-preview.png"
export default function Card1(){
    return(
        <div className={styles.card}>
            <div className={styles.titulo}>
                <img src={icone} className={styles.icone} />
                <h1>Agenda Consulta</h1>
            </div>
            <div className={styles.info}>
                <p><b>1000+</b> clínicas</p>
                <p><b>12.000+</b> laboratórios</p>
                <p><b>500+</b> farmácias</p>
            </div>
            <div className={styles.desc}>
                <p>e com descontos para você!</p>
            </div>
            <div className={styles.contimg}>
                <img src={moca} className={styles.moca} />
            </div>
        </div>
    )
}
