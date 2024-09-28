import styles from "./MainSection.module.css"
import TelegramIcon from "@/components/ui/icons/TelegramIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsappIcon";
import Image from "next/image";
import ChiantiLogo from "@/components/ui/ChiantiLogo/ChiantiLogo";
import ChiantiLogoArrow from "@/components/ui/ChiantiLogoArrow/ChiantiLogoArrow";
import localFont from "next/font/local";
import Link from "next/link";

const SFProDisplay = localFont({ src: '../fonts/SF-Pro.ttf' })

const MainSection = () => {
    return (
        <section className={styles.mainSection}>

            <div className={styles.leftImageContainer}>
                <Image className={styles.leftImage} width={542} height={665} src="./LeftImage.jpg" alt="Left image"/>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.logoContainer}>
                    <ChiantiLogoArrow className={styles.chiantiLogoArrow}/>
                    <ChiantiLogo className={styles.chiantiLogo}/>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${SFProDisplay.className} ${styles.contentText}`}>
                    Кьянти может быть на аперитив, может быть под горячее, а может быть ярким дижестивом. <br/><br/>
                    Мы элегантно начинаем вечер, будоражуще его сопровождаем, и ярко завершаем. Кьянти - настроение праздника!
                    </p>
                </div>
                <button className={styles.actionButton}>Связаться</button>
                <div className={styles.socialIcons}>
                    <Link href="https://t.me/chiprussia"><TelegramIcon/></Link>
                    <Link href="https://www.instagram.com/kudri_ky/"><InstagramIcon/></Link>
                    <Link href="https://wa.me/+79151534188"><WhatsappIcon/></Link>
                </div>
            </div>

        </section>
    );
};

export default MainSection;
