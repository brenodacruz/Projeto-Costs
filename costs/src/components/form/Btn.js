import styles from './Btn.module.css'

function Btn({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default Btn