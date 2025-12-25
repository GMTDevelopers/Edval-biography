import styles from './header.module.css'
const Header = ({img, page}) => {
    return ( 
        <header className={styles.header}>
            <img src={img} alt="Image" />
            <div className={styles.headerTxt}>
                <p className="subHeading">EDVALBIOGRAPHY</p>
                <h1>{page}</h1>
            </div>
        </header>
    );
}
 
export default Header;