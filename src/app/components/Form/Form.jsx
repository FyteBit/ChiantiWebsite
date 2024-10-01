"use client"

import { useState } from "react";
import styles from "./Form.module.css"


const Form = () => {
    const [data, setData] = useState({name:null, number:null, comment:null})
    
    const buttonFunc = () => {
        console.log(data)
    }




    return (
        <section className={styles.container}>
            <img className={styles.image} src="./form_image.jpg"></img>
            <h2>Оставить заявку</h2>
            <input type="text" placeholder="Имя" onChange={(event)=>{setData({name:event.target.value, number: data.number, comment:data.comment})}} className={styles.name}></input>
            <input type="number" placeholder="Номер телефона" onChange={(event)=>{setData({name:data.name,number:event.target.value,comment:data.comment })}} className={styles.number}></input>
            <input type="text" placeholder="Комментарий" onChange={(event)=>{setData({name:data.name,number:data.number,comment:event.target.value})}} className={styles.comment}></input>

            <button  onClick={buttonFunc} className={styles.button}>Отправить</button>
        </section>
    );
};

export default Form;