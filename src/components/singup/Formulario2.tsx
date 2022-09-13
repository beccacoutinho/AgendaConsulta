import styles from "../../styles/Formulario.module.css"
export default function Formulario2(){
    return(
        <div>
            <div className={styles.formulario}>
                <p>Nome Completo</p>
                <input type="text" name="nome"/>
                <p>CPF</p>
                <input type="text" name="cpf"/>
                <p>E-mail</p>
                <input type="text" name="email"/>
                <p>Whatsapp</p>
                <input type="text" name="whatsapp"/>
                <p>Senha</p>
                <input type="text" name="senha"/>
                <p>Repetir a senha</p>
                <input type="text" name="senha2"/>
            </div>
        </div>
    )
}