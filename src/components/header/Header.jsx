import React from "react";
import scss from "./Header.module.scss";

const Header = () => {
    const Nav = [
        {
            id: "",
            title: "О Нас"
        },
        {
            id: "",
            title: "Направления"
        },
        {
            id: "",
            title: "Отзывы"
        }
    ]
    return (
        <div className={scss.wrapper}>
            <div className="container">
                <img src="" alt="logo" />
                <div className={scss.navigation}>{Nav.map((el) => <a href={`#${el.id}`}>{el.title}</a>)}</div>
                <a className={scss.btn} href="https://forms.gle/5zkTnxdLdMLv4iCL7" target="_blank" rel="norefferer">Записаться</a>
            </div>
        </div>
    )
}

export default Header;