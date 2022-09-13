import styles from "../../styles/Botao.module.css"

interface Botaoprops{
    texto:string
}
export default function BotaoBranco(props: Botaoprops){
    return(
        <div>
            <button className={styles.botao}
                style={{backgroundColor:"#fff",
                    color:"#000",
                    border: "1px solid #D3D3D3"
            }}>{props.texto}</button>
        </div>
    )
}