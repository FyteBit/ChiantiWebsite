"use client"

import styles from "./MainSection.module.css"
import TelegramIcon from "@/components/ui/icons/TelegramIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsappIcon";
import Image from "next/image";
import ChiantiLogo from "@/components/ui/ChiantiLogo/ChiantiLogo";
import ChiantiLogoArrow from "@/components/ui/ChiantiLogoArrow/ChiantiLogoArrow";
import localFont from "next/font/local";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import Form from "../Form/Form";



const SFProDisplay = localFont({ src: '../fonts/SF-Pro.ttf' })

const MainSection = () => {
    const [formActive, setFormActive] = useState(false)
    return (
        <>
        <section className={styles.mainSection}>

            <div className={styles.leftImageContainer}>
                <Image className={styles.leftImage} width={542} height={665} src="/LeftImage.jpg" alt="Left image"/>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.logoContainer}>
                    <ChiantiLogoArrow className={styles.chiantiLogoArrow}/>
                    <ChiantiLogo className={styles.chiantiLogo}/>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${SFProDisplay.className} ${styles.contentText}`}>
                    Мы не про вино, мы про настроение!ツ  <br/><br/>Вы окажетесь в центре уютного квартирника, музыкально-иммерсивного шоу, где нет сцены, нет театральных стен! Есть только вы и мы, а между нами лишь музыкальные инструменты, которые возможно окажутся в ваших руках.
                    </p>
                </div>
                <div className={styles.bottomContainer}>
                <button className={styles.actionButton} onClick={()=>setFormActive(true)}>Связаться</button>
                <div className={styles.socialIcons}>
                    <Link href="https://t.me/chiprussia"><TelegramIcon/></Link>
                    <Link href="https://www.instagram.com/kudri_ky/"><InstagramIcon/></Link>
                    <Link href="https://wa.me/+79151534188"><WhatsappIcon/></Link>
                </div>
                </div>
            </div>

        </section>
        
        <Modal active={formActive} setActive={setFormActive}>
            <Form/>
        </Modal>
        </>
    );
};

export default MainSection;
