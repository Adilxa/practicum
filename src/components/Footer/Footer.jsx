import React from "react";
import styles from "./footer.module.scss"
import { FooterItem } from "../../constants/FooterConsts";

const Footer = () => {
    const renderFooter = React.useMemo(
        () =>
            FooterItem.map((item) => (
                <div key={item.id} className={styles.renderItem}>
                    <h1>{item.title}</h1>
                    <div className={styles.devider}></div>

                    <ul>
                        {item.arr.map((el) => (
                            <li key={el.id}>{el.title}</li>
                        ))}
                    </ul>
                </div>
            )),
        []
    );
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.render}>
                        <div className={styles.logo}>
                            <img src="./images/logo.jpg" alt="Logo" />
                        </div>
                        {renderFooter}
                    </div>
                </div>
                <div className={styles.underFooter}>
                    <div className="container">
                        <p>@2023 Solid Practicum / все права защищены</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;