import styles from "./CardsSection.module.css"
import localFont from "next/font/local";
import Image from "next/image";
import ArrowIco from "@/components/ui/icons/ArrowIco";

const SFProDisplay = localFont({ src: '../fonts/SF-Pro.ttf' })
const Lighthaus = localFont({ src: '../fonts/Lighthaus.ttf' })

const CardSection = () => {
    return (
        <section className={styles.cardsSection}>
            <div className={styles.cardContainer}>
                <div className={styles.cardTextContainer}>
                    <div className={`${SFProDisplay.className} ${styles.cardNumber}`}>01</div>
                    <div className={`${Lighthaus.className} ${styles.cardName}`}>
                        Вечер с <br className={styles.break}/>
                        <span className={`${Lighthaus.className} ${styles.cardNameSpan}`}>
                            кьянти
                        </span>
                    </div>
                </div>
                <Image width={335} height={398}  src="./Photo1.png" className={styles.cardImage} alt={"Photo"}/>
                <button className={`${SFProDisplay.className} ${styles.moreDetails}`}>
                    Подробнее
                    <ArrowIco className={styles.moreDetailsArrow}/>
                </button>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardTextContainer}>
                    <div className={`${SFProDisplay.className} ${styles.cardNumber}`}>02</div>
                    <div className={`${Lighthaus.className} ${styles.cardName}`}>
                        Караоке с <br className={styles.break}/>
                        <span className={`${Lighthaus.className} ${styles.cardNameSpan}`}>
                            кьянти
                        </span>
                    </div>
                </div>
                <Image width={335} height={398}  src="./Photo2.png" className={styles.cardImage} alt={"Photo"}/>
                <button className={`${SFProDisplay.className} ${styles.moreDetails}`}>
                    Подробнее
                    <ArrowIco className={styles.moreDetailsArrow}/>
                </button>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardTextContainer}>
                    <div className={`${SFProDisplay.className} ${styles.cardNumber}`}>03</div>
                    <div className={`${Lighthaus.className} ${styles.cardName}`}>
                        Соло Саши <br className={styles.break}/>
                        <span className={`${Lighthaus.className} ${styles.cardNameSpan}`}>
                            кьянти
                        </span>
                    </div>
                </div>
                <Image width={335} height={398}  src="./Photo3.png" className={styles.cardImage} alt={"Photo"}/>
                <button className={`${SFProDisplay.className} ${styles.moreDetails}`}>
                    Подробнее
                    <ArrowIco className={styles.moreDetailsArrow}/>
                </button>
            </div>

            /*<div className={styles.cardContainer}>
                <div className={styles.cardTextContainer}>
                    <div className={`${SFProDisplay.className} ${styles.cardNumber}`}>04</div>
                    <div className={`${Lighthaus.className} ${styles.cardName}`}>
                        соло<br className={styles.break}/>
                        <span className={`${Lighthaus.className} ${styles.cardNameSpan}`}>

                        </span>
                    </div>
                </div>
                <Image width={335} height={396} src="./Photo4.png" className={styles.cardImage} alt={"Photo"}/>
                <button className={`${SFProDisplay.className} ${styles.moreDetails}`}>
                    Подробнее
                    <ArrowIco className={styles.moreDetailsArrow}/>
                </button>
            </div>*/
        </section>
    );
};

export default CardSection;
