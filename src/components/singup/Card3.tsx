import BotaoBranco from "../shared/BotaoBranco"
import BotaoVermelho from "../shared/BotaoVermelho"
import styles from "../../styles/Card2.module.css"
import Divisor from "../shared/Divisor"
import Formulario2 from "./Formulario2"
import { Link } from "react-router-dom"

export default function Card3(){
    return(
        <div className={[styles.card3,styles.card2].join(' ')}>
            <h1>Bem-vindo a Agenda Consulta!</h1>
            <div className={styles.form1}>
                <Formulario2 />
            </div>
            <div className={styles.esqsen}>
                <BotaoVermelho texto="Criar nova conta" />
            </div>
            <div>
                <Divisor />
            </div>
            <div className={styles.criar}>
                <h3>Já possui cadastro?</h3>
                <Link to="/">
                    <BotaoBranco texto="Fazer login"/>
                </Link>
            </div>
        </div>

    )
}