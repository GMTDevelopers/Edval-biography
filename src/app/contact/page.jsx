import Image from "next/image";
import Header from "../(components)/header/page";
import Navbar from "../(components)/navbar/page";
import styles from '../about/about.module.css';
import Styles from './contact.module.css'
const Contact = () => {
    return ( 
        <main style={{position:"relative"}}>
            <Header img='/image/contact/banner.webp' page="Contact us"/>
            <div className="container">
                <section className={styles.inTouchSection}>
                    <div className={styles.needHeader}>
                        <h2>Get in touch</h2>
                        <p>Have questions or need clarification? Reach out to us.</p>
                    </div>
                    <div className={styles.double}>
                        <img className={Styles.contactImg} width={477} height={663} src="/image/contact/form.webp" alt="need" />
                        <form className={styles.doubleTxt}>
                            <p>If you’re unsure which service fits your needs, or just want to ask before committing, reach out. We’re here to help.</p>
                            <div className={Styles.tag}>
                                <label htmlFor="name">Full name</label>
                                <input type="text" name="name" id="name" />
                                
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" id="email" />
                                
                                <label htmlFor="phone">Phone number</label>
                                <input type="tel" name="phone" id="phone" />
                                
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button className="btn"> Send message </button>
                        </form>
                    </div> 
                </section>
            </div>
        </main>
    );
}
 
export default Contact;