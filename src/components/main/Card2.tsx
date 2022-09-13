import BotaoBranco from "../shared/BotaoBranco"
import BotaoVermelho from "../shared/BotaoVermelho"
import styles from "../../styles/Card2.module.css"
import Divisor from "../shared/Divisor"
import Formulario1 from "./Formulario1"
import { Link } from "react-router-dom"


export default function Card2(){
    return(
        <div className={styles.card2}>
            <h1>Bem-vindo a Agenda Consulta!</h1>
            <div className={styles.form1}>
                <Formulario1 />
            </div>
            <div className={styles.esqsen}>
                <p>Esqueceu sua senha?</p>
                    <BotaoVermelho texto="Fazer login" />
            </div>
            <div>
                <Divisor />
            </div>
            <div className={styles.criar}>
                <h3>Crie uma conta e faça parte de uma revolução da saúde.</h3>
                <Link to='/cadastro'>
                    <BotaoBranco texto="Criar uma conta"/>
                </Link>
            </div>
        </div>
    )
}
