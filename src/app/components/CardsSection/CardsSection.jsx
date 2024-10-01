"use client"
import styles from "./CardsSection.module.css"
import localFont from "next/font/local";
import Image from "next/image";
import ArrowIco from "@/components/ui/icons/ArrowIco";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import Modal1 from "../Modals/Modal1/Modal1";
import Modal2 from "../Modals/Modal2/Modal2";
import Modal3 from "../Modals/Modal3/Modal3";

const SFProDisplay = localFont({ src: '../fonts/SF-Pro.ttf' })
const Lighthaus = localFont({ src: '../fonts/Lighthaus.ttf' })

const CardSection = () => {

    const [modal1Active, setModal1Active] = useState(false);
    const [modal2Active, setModal2Active] = useState(false);
    const [modal3Active, setModal3Active] = useState(false);



    return (
        <>
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
                <Image width={450} height={398}  src="./Photo1.png" className={styles.cardImage} alt={"Photo"}/>
                <button onClick={()=>setModal1Active(true)} className={`${SFProDisplay.className} ${styles.moreDetails}`}>
                    Подробнее
                    <ArrowIco className={styles.moreDetailsArrow}/>
                </button>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardTextContainer}>
                    <div className={`${SFProDisplay.className} ${styles.cardNumber}`}>02</div>
                    <div className={`${Lighthaus.className} ${styles.cardName}`}>
                        Хараоке с <br className={styles.break}/>
                        <span className={`${Lighthaus.className} ${styles.cardNameSpan}`}>
                            кьянти
                        </span>
                    </div>
                </div>
                <Image width={335} height={398}  src="./Photo2.png" className={styles.cardImage} alt={"Photo"}/>
                <button onClick={()=>setModal2Active(true)} className={`${SFProDisplay.className} ${styles.moreDetails}`}>
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
                <Image width={335} height={398}  src="./Photo4.png" className={styles.cardImage} alt={"Photo"}/>
                <button onClick={()=>setModal3Active(true)} className={`${SFProDisplay.className} ${styles.moreDetails}`}>
                    Подробнее
                    <ArrowIco className={styles.moreDetailsArrow}/>
                </button>
            </div>
        </section>

        <div>
            <Modal active={modal1Active} setActive={setModal1Active}><Modal1/></Modal>
            <Modal active={modal2Active} setActive={setModal2Active}><Modal2/></Modal>
            <Modal active={modal3Active} setActive={setModal3Active}><Modal3/></Modal>
        </div>

    </>
    );
};

export default CardSection;
