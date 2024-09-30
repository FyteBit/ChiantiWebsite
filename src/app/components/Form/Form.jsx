"use client"

import { useState } from "react";
import styles from "./Form.module.css"


const Form = () => {
    const [data, setData] = useState({name:null, number:null, comment:null})
    
    const buttonFunc = () => {
        console.log(data)
    }




    return (
        <form className={styles.container}>
            <h2>Оставить заявку</h2>
            <input type="text" placeholder="Имя" onChange={(event)=>{setData({name:event.target.value})}} className={styles.name}></input>
            <input type="number" placeholder="phone number" onChange={(event)=>{setData({number:event.target.value})}} className={styles.number}></input>
            <input type="text" placeholder="Комментарий" onChange={(event)=>{setData({comment:event.target.value})}} className={styles.comment}></input>

            <button type="submit" onClick={buttonFunc} className={styles.button}>Отправить</button>
        </form>
    );
};

export default Form;