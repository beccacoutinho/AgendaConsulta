import styles from "../../styles/Botao.module.css"

interface Botaoprops{
    texto:string
}

export default function BotaoVermelho(props: Botaoprops){
    return(
            <button className={styles.botao}
            style={{backgroundColor: "#E93B3D"}}>{props.texto}</button>
    )
}