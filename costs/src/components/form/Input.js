import styles from './Input.module.css'

function Input({text, name, placeholder, type, handleOnChange, value}){
    return(
        <div className={styles.input}>
            <label htmlFor={name}>{text}:</label>
            <input
            text={text}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={handleOnChange}
            value={value}
            ></input>
        </div>
    )
}

export default Input