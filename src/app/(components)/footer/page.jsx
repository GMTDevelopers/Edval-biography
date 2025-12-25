import { ArrowRight, Facebook, LucideInstagram, Mail, MapPinned, Phone } from 'lucide-react';
import styles from './footer.module.css';
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer>
            <div className={styles.footer1}>
                <Image className={styles.footer1Bg} src='/image/footer/footer1.webp' width={1440} height={629} alt="footer" />
                <div className={styles.footer1Txt}>
                    <Image className={styles.footer1Logo} width={196} height={29} src="/image/logo.png" alt="logo" />
                    <p style={{color:"#FFFFFF"}} className={styles.footerH1}>Your Story Deserves Professional Documentation</p>
                    <p style={{lineHeight:"25px", color:"#FFFFFF"}}>We help individuals and organizations transform experiences, milestones, and achievements into credible, lasting records.</p>
                    <div className="btn">Get started today <ArrowRight className="icon" /> </div>
                </div>
            </div>
            <div className={styles.footer2}>
                <div className={styles.footer2Inner}>
                    <div className={styles.item1}>
                        <Image className={styles.footer1Logo} width={196} height={29} src="/image/logo.png" alt="logo" />
                        <p style={{fontWeight:500, color:"#FFFFFF"}} >We are committed to Preserving stories, documenting legacies, and advancing knowledge.</p>
                        <div className={styles.itemContacts}>
                            <li><Phone style={{color:"#7BA613"}} className='icon'/> +234 805 596 6609</li>
                            <li><Mail style={{color:"#7BA613"}} className='icon'/> info@edvalbiography.com</li>
                            <li><MapPinned style={{color:"#7BA613"}} className='icon' /> 20A Okumagba avenue off airport road, before estate roundabout, warri.</li>
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <p style={{color:"#FFFFFF"}} className={styles.itemHeader}>QUICK LINKS</p>
                        <ul className={styles.itemContacts}>
                            <li> Home</li>
                            <li>About us</li>
                            <li> Our services</li>
                            <li>Contact us</li>
                            <li>Book a service</li>
                        </ul>
                    </div>
                    <div className={styles.item3}>
                        <p style={{color:"#FFFFFF"}} className={styles.itemHeader}>FOLLOW US ON SOCIAL MEDIA</p>
                        <div className={styles.footerSocials}>
                            <img src="/image/footer/instagram.png" alt="instagram" />
                            <img src="/image/footer/x.png" alt="x" />
                            <img src="/image/footer/linkedin.png" alt="linkedin" />
                            <img src="/image/footer/facebook.png" alt="facebook" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;