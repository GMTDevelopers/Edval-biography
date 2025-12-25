'use client'
import Image from 'next/image';
import styles from './navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const [activeTab, setActiveTab] = useState('')
    const [menuOpen, setMenuOpen] = useState(false);
    return ( 
        <nav className={styles.navbar}>
            <div className={styles.navbarInner}>
                <Link href="/"><Image src='/image/logo.png' width={196} height={29} alt='navbar logo' /></Link>
                <ul className={`${styles.navLinks} ${menuOpen ? '' : styles.showMenu}`}>
                    <Link href="/"><li  onClick={() => setActiveTab('Home')} className={activeTab === "Home" ? styles.active : ''}>Home</li></Link> 
                    <Link href="/about"><li  onClick={() => setActiveTab('About')} className={activeTab === "About" ? styles.active : ''}>About us</li></Link>
                    <Link href="/service"><li  onClick={() => setActiveTab('services')} className={activeTab === "services" ? styles.active : ''}>Our services</li></Link>
                    <Link href="/contact"><li  onClick={() => setActiveTab('Contact')} className={activeTab === "Contact" ? styles.active : ''}>Contact us</li></Link>
                    <Link href="/booking"><li id={styles.showLink}  onClick={() => setActiveTab('Book a service')} className={`${styles.showLink} ${activeTab === "Book a service" ? styles.active : ''}`}>Book a service</li></Link>
                </ul>
                <div className={`btn ${styles.navBtn}`}> <Link href="/contact">Book a service </Link></div>
                {/* Hamburger Icon */}
                <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </div>
            </div>
            
        </nav>
    );
}
 
export default Navbar;