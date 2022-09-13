import styles from "../../styles/Formulario.module.css"

export default function Formulario1(){
    return(
        <div>
            <div className={styles.formulario}>
                <p>E-mail ou telefone</p>
                <input type="text" name="user"/>
                <p>Senha</p>
                <input type="text" name="senha"/>
            </div>
        </div>
    )
}