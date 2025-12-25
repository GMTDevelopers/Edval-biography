'use client';
import Header from '../(components)/header/page';
import Navbar from '../(components)/navbar/page';
import styles from './booking.module.css';
const Booking = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const organization = formData.get("organization");
        const service = formData.get("service");
        const message = formData.get("message");

        console.log(name, email, phone, organization, service, message)
    };
    return ( 
        <main style={{position:'relative'}}>
            <Header img="/image/bookingBanner.webp" page="Book a service" />
            <div className={styles.container}>
                <div className={styles.bookingHeader}>
                    <h2 >Service order form</h2>
                    <p className={styles.headerDescription}>To book any of our services, please fill the form below. Our team will contact you to discuss details and next steps.</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.tag}>
                        <label htmlFor="name">Full name</label>
                        <input required type="text" name="name" id="name" />
                        
                        <label htmlFor="email">Email address</label>
                        <input required type="email" name="email" id="email" />
                        
                        <label htmlFor="phone">Phone number</label>
                        <input required type="tel" name="phone" id="phone" />

                        <label htmlFor="organization">Organization (if any)</label>
                        <input type="text" name="organization" id="organization" />

                        <label htmlFor="service">Service needed</label>
                        <select required name="service" id="service" defaultValue="Select service">
                            <option value="" disabled >Select service</option>
                            <option value="WRITING BIOGRAPHIES AND AUTOBIOGRAPHIES">WRITING BIOGRAPHIES AND AUTOBIOGRAPHIES</option>
                            <option value="ACADEMIC RESEARCH">ACADEMIC RESEARCH</option>
                            <option value="SOCIAL RESEARCH">SOCIAL RESEARCH</option>
                            <option value="LIFETIME ACHIEVEMENT RECORDING">LIFETIME ACHIEVEMENT RECORDING</option>
                            <option value="HISTORICAL RESEARCH">HISTORICAL RESEARCH</option>
                            <option value="AWARD CEREMONY ORGANIZATION">AWARD CEREMONY ORGANIZATION</option>
                        </select>
                        
                        
                        <label htmlFor="message">Brief description of your request</label>
                        <textarea required name="message" id="message"></textarea>
                    </div>
                    <button className="btn"> Send message </button>
                </form>
            </div>
        </main>
    );
}
 
export default Booking;