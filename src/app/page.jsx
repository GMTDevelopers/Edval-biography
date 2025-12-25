'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, CircleCheck, GraduationCap, History, IdCard, Medal, Trophy, UsersRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{position:"relative"}}>
      <header className={styles.header}>
        <Image src='/image/homepage/banner.webp' height={862} width={1440} alt="banner" />
        <div className={styles.headerTxt}>
          <p className="subHeading">EDVALBIOGRAPHY</p>
          <h1>Professional Biography and Research services you can trust.</h1>
          <p className={styles.headerDescription}>We help individuals, institutions, and organizations document lives, achievements, and histories with depth, accuracy, and lasting value.</p>
          <Link href="/booking"><div className="btn">Book a service <ArrowRight className="icon" /> </div></Link>
        </div>
      </header>
      <main className='container'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <section className={styles.doubleLeft}>
            <img className={styles.doubleImg} src='/image/homepage/philosophy.png'  alt="philosophy" />
            <div className={styles.bookTxt}>
              <h2>Our Philosophy . . .</h2>
              <div>
                <p>At EDVAL Biography, we understand that telling a life story or documenting serious work is not something you rush. It requires time, listening, research, and care.</p>
                <p>People come to us for different reasons. Some want to record their personal journey for their children and grandchildren. Some want to document years of professional achievements. Others need solid academic or historical research that can be referenced and trusted.</p>
                <p>Whatever brings you here, our role is simple: to help you tell your story clearly, accurately, and respectfully.</p>
              </div>
            </div>
          </section>
        </motion.div>
        <section className={styles.serviceOffer}>
          <div className={styles.serviceOfferHeader}>
            <div className={styles.serviceOfferHeaderItem1}>
              <p style={{letterSpacing:"4px"}} className="subHeading">EDVALBIOGRAPHY</p>
              <h2>Services we offer</h2>
            </div>
            <p className={styles.serviceOfferHeaderItem2}>We work closely with you to document history and research in a thoughtful, well-structured way.</p>
            <Link href="/service"> <div className={`${styles.serviceOfferHeaderItem3} btn`}>Learn more</div> </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}  // Start lower, slightly smaller, invisible
            whileInView={{ opacity: 1, y: 0, scale: 1 }}   // Fade in, move up, grow to full size
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                delay: 0.2,  // Adjust delay per card as before (0.2, 0.4, 0.6, etc.)
                ease: [0.25, 0.46, 0.45, 0.94],  // Smooth ease-out-cubic feel
            }}
          >
            <div className={styles.cardPack}>
              <div className={styles.card}>
                <IdCard className={styles.cardIcon}/>
                <p className={`${styles.cardTitle} title`}>Biographies & Autobiographies</p>
                <p>Personal, family, and professional life stories written with care, accuracy, and depth.</p>
              </div>
              <div className={styles.card}>
                <GraduationCap className={styles.cardIcon}/>
                <p className={`${styles.cardTitle} title`}>Academic Research</p>
                <p>Structured academic research support that meets scholarly standards and supports learning  and publication.</p>
              </div>
              <div className={styles.card}>
                <UsersRound className={styles.cardIcon}/>
                <p className={`${styles.cardTitle} title`}>Social Research</p>
                <p>Research focused on understanding people, communities, and social issues through careful study & documentation.</p>
              </div>

              <div className={styles.card}>
                <Medal className={styles.cardIcon}/>
                <p className={`${styles.cardTitle} title`}>Lifetime Achievement Recording</p>
                <p>Professional documentation of long-term contributions, careers, and impact for individuals and institutions.</p>
              </div>
              <div className={styles.card}>
                <History className={styles.cardIcon}/>
                <p className={`${styles.cardTitle} title`}>Historical Research</p>
                <p>In-depth research of organizational, institutional, and community history for long-term reference.</p>
              </div>
              <div className={styles.card}>
                <Trophy className={styles.cardIcon}/>
                <p className={`${styles.cardTitle} title`}>Award Ceremonies</p>
                <p>Planning, documentation and citation writing for award programs that recognize excellence and achievement.</p>
              </div>
            </div>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <section className={`${styles.chooseUsDouble} ${styles.doubleLeft}`}>
            <div className={`${styles.bookTxt} ${styles.chooseTxt}`}>
              <div className={styles.chooseHeader}>
                <p style={{letterSpacing:"4px"}} className="subHeading">EDVALBIOGRAPHY</p>
                <h2>Why choose us?</h2>
              </div>
              <p>Choosing someone to document your story or research is a personal decision. We understand what it means to be trusted with work that matters.</p>
              <div className={styles.chooseCardPack}>
                <span className={styles.chooseCard}>
                  <div className={styles.chooseCardHeader}>
                    <CircleCheck className="icon" /> Personal Approach
                  </div>
                  <p>Every project is treated with care and attention. Nothing is copied, rushed, or handled like a template.</p>
                </span>
                <span className={styles.chooseCard}>
                  <div className={styles.chooseCardHeader}>
                    <CircleCheck className="icon" /> Personal Approach
                  </div>
                  <p>Every project is treated with care and attention. Nothing is copied, rushed, or handled like a template.</p>
                </span>
                <span className={styles.chooseCard}>
                  <div className={styles.chooseCardHeader}>
                    <CircleCheck className="icon" /> Personal Approach
                  </div>
                  <p>Every project is treated with care and attention. Nothing is copied, rushed, or handled like a template.</p>
                </span>
                <span className={styles.chooseCard}>
                  <div className={styles.chooseCardHeader}>
                    <CircleCheck className="icon" /> Personal Approach
                  </div>
                  <p>Every project is treated with care and attention. Nothing is copied, rushed, or handled like a template.</p>
                </span>
              </div>
            </div>
            <Image className={styles.ChooseDoubleImg} src='/image/homepage/chooseUs.png' width={465} height={588} alt="philosophy" />
          </section>
        </motion.div>
      </main>
    </main>
  );
}
