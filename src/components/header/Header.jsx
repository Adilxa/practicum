import React, { useState, useEffect } from "react";
import scss from "./Header.module.scss";
import { Link } from "react-scroll";
import menu from "../../../public/images/menu.png";
import Image from "next/image";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const Nav = [
        {
            id: "aboutus",
            title: "О Нас"
        },
        {
            id: "directions",
            title: "Направления"
        },
        {
            id: "feedback",
            title: "Отзывы"
        }
    ]
    useEffect(() => {
        if (openModal) {
            document.body.style.height = '18vh';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = 'visible';
        }
    }, [openModal]);

    const click = () => {
        setOpen(!open)
    }
    return (
        <div className={scss.wrapper}>
            <div className="container">
                <img src="./images/logo.jpg" alt="logo" />
                <div className={scss.navigation}>{Nav.map((el, i) => <Link key={`${el.id}_${i}`} to={`${el.id}`}>{el.title}</Link>)}</div>
                <a className={scss.btn} href="https://forms.gle/5zkTnxdLdMLv4iCL7" target="_blank" rel="norefferer">Записаться</a>
                <div className={scss.dynamic_burger}>
                    <div className={scss.menu_burger}>
                        <div onClick={click}>
                            <Image src={menu} alt={"burger_menu"} className={scss.menuBurger} onClick={() => setOpenModal(true)} />
                        </div>
                    </div>
                    <div className={!openModal ? scss.backNon : scss.back} onClick={() => setOpenModal(false)}>
                        <div className={`${openModal == true ? scss.modal : ""} ${openModal == false ? scss.modalNon : ""}`}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}>
                            <div className={scss.burger_menu}>
                                <div className={scss.topSide}>
                                    <div className={scss.nav}>
                                        <img src="./images/logo.jpg" alt="logo" />
                                        <h3 style={{
                                            borderBottom: "1px solid rgb(34 24 24 / 82%)",
                                            width: "100%",
                                            color: "rgb(34 24 24 / 82%)"
                                        }}>Навигация</h3>
                                        {Nav.map((el, i) => <Link key={`${el.id}_${i}`} onClick={() => setOpenModal(false)} to={`${el.id}`}>{el.title}</Link>)}

                                        <h3 style={{
                                            borderBottom: "1px solid rgb(34 24 24 / 82%)",
                                            width: "100%",
                                            color: "rgb(34 24 24 / 82%)"
                                        }}>Социальные сети</h3>
                                        <a href="https://www.instagram.com/solid.practicum.kg/" target="_blank" rel="norefferer">* Instagram</a>
                                        <a href="https://web.telegram.org/k/#2049795564" target="_blank" rel="norefferer">* Telegram</a>
                                        <h3 style={{
                                            borderBottom: "1px solid rgb(34 24 24 / 82%)",
                                            width: "100%",
                                            color: "rgb(34 24 24 / 82%)"
                                        }}>Позвони нам</h3>
                                        <h5>+996 (705) 45 54 66</h5>
                                        <h5>+996 (500) 35 35 29</h5>
                                    </div>
                                    <a className={scss.order} href="https://forms.gle/5zkTnxdLdMLv4iCL7" target="_blank" rel="norefferer">Записаться</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;