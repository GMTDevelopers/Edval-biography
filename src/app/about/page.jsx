'use client'
import Header from "../(components)/header/page";
import styles from "./about.module.css";
import { CircleCheck, Eye, IdCard, Target } from "lucide-react";
import { motion } from "framer-motion";
const About = () => {
    return ( 
        <main style={{position:'relative'}}>
            <Header img="/image/about/banner.webp" page="About Us." />
            <div className="container">
                <section className={styles.needSection}>
                    <div className={styles.needHeader}>
                        <h2>The need . . .</h2>
                        <p>EDVAL Biography was created out of a simple realization:</p>
                        <p>Many important stories are never properly told, and many achievements are never properly documented.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className={styles.double}>
                            <img  src="/image/about/need.webp" alt="need" />
                            <div className={styles.doubleTxt}>
                                <p>EDVAL Biography is a professional documentation and research service dedicated to preserving lives, achievements, and historical records. We work with individuals, businesses, organizations, and academic institutions to produce accurate, well-structured, and meaningful documentation.</p>
                                <p>Our approach combines storytelling, research rigor, and ethical documentation practices to ensure every project reflects truth, depth, and long-term relevance.</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className={styles.double}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className={styles.card}>
                                <Target className={styles.cardIcon}/>
                                <p className={`${styles.cardTitle} title`}>Our Mission</p>
                                <p>To preserve stories, achievements, and histories through professional documentation that educates, honors, and endures.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className={styles.card}>
                                <Eye className={styles.cardIcon}/>
                                <p className={`${styles.cardTitle} title`}>Our Vision</p>
                                <p>To become a trusted reference point for biography writing, research, and legacy documentation across individuals and institutions.</p>
                            </div>
                        </motion.div>
                    </div>                    
                </section>
                <section className={styles.valueSection}>
                    <div className={styles.valueHeader}>
                        <p style={{letterSpacing:"7px", fontWeight:600}} className="subHeading">EDVALBIOGRAPHY</p>
                        <h2 >Our values</h2>
                        <p className={styles.headerDescription}>We help people and institutions preserve their stories, achievements, and research in a way that feels honest, clear, and meaningful.</p>
                    </div>
                    <div className={styles.valueImg}>
                        <img src="/image/about/values.webp" width={654} height={292} alt="value"/>
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
                        <div className={styles.valuePack}>
                            <span style={{borderTop:"0px",borderLeft:"0px"}} className={styles.chooseCard}>
                                <div className={styles.chooseCardHeader}>
                                    <CircleCheck className="icon" /> Accuracy
                                </div>
                                <p>We are committed to getting the facts right through careful research, verification, and attention to detail.</p>
                            </span>
                            <span style={{borderTop:"0px",borderLeft:"0px"}} className={styles.chooseCard}>
                                <div className={styles.chooseCardHeader}>
                                    <CircleCheck className="icon" /> Integrity
                                </div>
                                <p>We handle every project honestly, ethically, and with full respect for the truth behind each story.</p>
                            </span>
                            <span style={{borderTop:"0px", borderRight:"0px", borderLeft:"0px"}} className={styles.chooseCard}>
                                <div className={styles.chooseCardHeader}>
                                    <CircleCheck className="icon" /> Respect
                                </div>
                                <p>Every story, subject, and experience is treated with dignity, sensitivity, and understanding.</p>
                            </span>
                            <span style={{borderTop:"0px",borderLeft:"0px",borderBottom:"0px"}} className={styles.chooseCard}>
                                <div className={styles.chooseCardHeader}>
                                    <CircleCheck className="icon" /> Research Excellence
                                </div>
                                <p>Our work is grounded in solid research methods that meet academic and professional standards.</p>
                            </span>
                            <span style={{borderTop:"0px",borderRight:"0px", borderLeft:"0px", borderBottom:"0px"}} className={styles.chooseCard}>
                                <div className={styles.chooseCardHeader}>
                                    <CircleCheck className="icon" /> Confidentiality
                                </div>
                                <p>Personal information and sensitive details are handled with discretion and professionalism at all times.</p>
                            </span>
                            <span style={{borderTop:"0px",borderRight:"0px", borderBottom:"0px"}} className={styles.chooseCard}>
                                <div className={styles.chooseCardHeader}>
                                    <CircleCheck className="icon" /> Long-Term Value
                                </div>
                                <p>Everything we create is designed to remain useful, relevant, and meaningful well into the future.</p>
                            </span>
                        </div>
                    </motion.div>
                    <div className="btn"> Learn more </div>
                </section>
            </div>
        </main>
    );
}
 
export default About;