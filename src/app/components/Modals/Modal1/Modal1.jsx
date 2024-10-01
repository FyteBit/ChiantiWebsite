import styles from "./Modal1.module.css"

const Modal1 = () => {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src="./modal1_image.jpg"></img>
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.h2}>ШОУ-ГРУППА «КЬЯНТИ» ♬</h2>
                <p className={styles.text}>๏ Танцевально-драйвовый концерт-шоу группы «Кьянти» состоит из 2-х сочных блоков по 30 минут, с интерактивными, музыкальными играми, живым общением солистов группы с залом и танцами (перерыв между блоками не более 30 минут, дабы поддерживать градус настроения)</p>
                <div className={styles.priceContainer}>
                    <p className={styles.price}>Стоимость 170тр.</p>
                    <p className={styles.riders}>๏ <a className={styles.link} href="https://disk.yandex.ru/i/VdOIO0FvY9597w">Райдеры</a></p>
                </div>
                <p className={styles.text}>๏ Продегустировать нашу работу можно по <a className={styles.link} href="https://disk.yandex.ru/d/2dWGKXEGA0CrJA">ссылке</a></p>
                <button className={styles.button}>Будем рады разделить с вами теплый душевный вечер) 🍷 🎵</button>
            
            </div>
        </div>
    );
};

export default Modal1;