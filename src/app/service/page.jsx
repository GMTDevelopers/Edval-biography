"use client";
import Image from "next/image";
import Header from "../(components)/header/page";
import { motion } from "framer-motion";
import styles from './service.module.css';
import { ArrowRight, GraduationCap, History, IdCard, Medal, Trophy, UsersRound } from "lucide-react";
const Service = () => {
    return ( 
        <main style={{position:"relative"}}>
            <Header img='/image/service/banner.webp' page="Our services" />
            <div className="container">
                <section className={styles.offerSection}>
                    <div className={styles.serviceOfferHeader}>
                        <div className={styles.serviceOfferHeaderItem1}>
                        <p style={{letterSpacing:"4px"}} className="subHeading">EDVALBIOGRAPHY</p>
                        <h2>WHAT WE DO</h2>
                        </div>
                        <p className={styles.serviceOfferHeaderItem2}>Every service we offer is built around one goal: helping you document stories, achievements, and research in a way that is clear, accurate, and meaningful.</p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.double}>
                            <Image width={528} height={510} src="/image/service/service.webp" alt="need" />
                            <div className={styles.doubleTxt}>
                                <div className={styles.doubleHeader}>
                                    <IdCard className={styles.doubleHeaderIcon} />
                                    <h3 style={{color:"#233C01"}}>WRITING BIOGRAPHIES AND AUTOBIOGRAPHIES</h3>
                                </div>
                                <p>Writing about a life is not just listing events. It’s understanding choices, challenges, growth, and impact. We work closely with you through conversations, interviews, and research to create a biography or autobiography that truly reflects who you are.</p>
                                <p>This service is ideal if you want to preserve your personal story, document a loved one’s life, or record the journey of a leader.</p>
                                <Link href="/booking"><div className="btnBorderless">Start a biography <ArrowRight className="icon" /> </div></Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className={`${styles.double} ${styles.doubleLeft}`}>
                            <div className={styles.doubleTxt}>
                                <div className={styles.doubleHeader}>
                                    <GraduationCap className={styles.doubleHeaderIcon} />
                                    <h3 style={{color:"#233C01"}}>ACADEMIC RESEARCH</h3>
                                </div>
                                <p>We support academic work that requires structure, clarity, and proper documentation.</p>
                                <p>Whether you’re an institution, researcher, or student, we help organize research, document findings, and present work in a clear and academically sound manner.</p>
                                <Link href="/booking"><div className="btnBorderless">Request academic writing <ArrowRight className="icon" /> </div></Link>
                            </div>
                            <Image width={528} height={455} src="/image/service/academic.webp" alt="need" />
                        </div>
                    </motion.div>
                    <div className={`${styles.double} ${styles.doubleText}`}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className={styles.doubleTxt}>
                                <div className={styles.doubleHeader}>
                                    <UsersRound className={styles.doubleHeaderIcon} />
                                    <h3 style={{color:"#233C01"}}>SOCIAL RESEARCH</h3>
                                </div>
                                <p>Understanding people and societies requires careful observation and proper documentation.</p>
                                <p>We conduct and support social research projects that help organizations, institutions, and communities better understand social patterns, behaviors, and impact.</p>
                                <Link href="/booking"><div className="btnBorderless">Request social research <ArrowRight className="icon" /> </div></Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className={styles.doubleTxt}>
                                <div className={styles.doubleHeader}>
                                    <Medal className={styles.doubleHeaderIcon} />
                                    <h3 style={{color:"#233C01"}}>LIFETIME ACHIEVEMENT RECORDING</h3>
                                </div>
                                <p>Many people and institutions reach a point where it becomes important to document years of work, service, and impact.</p>
                                <p>We help you carefully record achievements, milestones, and contributions in a way that can be referenced, celebrated, and preserved.</p>
                                <Link href="/booking"><div className="btnBorderless">Make a request <ArrowRight className="icon" /> </div></Link>
                            </div>      
                        </motion.div>                  
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.double}>
                            <Image width={528} height={510} src="/image/service/history.webp" alt="need" />
                            <div className={styles.doubleTxt}>
                                <div className={styles.doubleHeader}>
                                    <History className={styles.doubleHeaderIcon} />
                                    <h3 style={{color:"#233C01"}}>HISTORICAL RESEARCH</h3>
                                </div>
                                <p>History matters, especially when it is properly documented.</p>
                                <p>We research and document organizational, institutional, and community history using verified sources, interviews, and archival material.</p>
                                <Link href="/booking"><div className="btnBorderless">Start historical documentation <ArrowRight className="icon" /> </div></Link>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className={`${styles.double} ${styles.doubleLeft}`}>
                            <div className={styles.doubleTxt}>
                                <div className={styles.doubleHeader}>
                                    <Trophy className={styles.doubleHeaderIcon} />
                                    <h3 style={{color:"#233C01"}}>AWARD CEREMONY ORGANIZATION</h3>
                                </div>
                                <p>We help plan and document award ceremonies that recognize excellence and service.</p>
                                <p>From citation writing to achievement documentation, we ensure award programs are meaningful and professionally handled.</p>
                                <Link href="/booking"><div className="btnBorderless">Plan an Award Program <ArrowRight className="icon" /> </div></Link>
                            </div>
                            <Image width={528} height={455} src="/image/service/award.webp" alt="need" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
 
export default Service;