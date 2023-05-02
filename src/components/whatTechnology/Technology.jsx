import React, { useMemo } from "react";
import scss from "./Technology.module.scss";
import { Image } from 'next/image';

const Technology = () => {
    const technologies = [
        {
            title: "Front-End",
            img: "./images/web.png",
            des: "Фронтенд-разработка включает в себя создание веб-интерфейсов, с которыми взаимодействуют пользователи. Это требует использования языков программирования, таких как HTML, CSS и JavaScript, для создания веб-сайтов и веб-приложений, которые запускаются в веб-браузерах. Frontend-разработчики отвечают за проектирование, разработку и поддержку пользовательского интерфейса веб-приложений.",
            link: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4",
        },
        {
            title: "Back-End",
            img: "./images/server.png",
            des: "Backend-разработка включает в себя создание серверной части веб-приложений. Он требует использования языков программирования, таких как PHP, Ruby, Python и Java, для создания внутренней логики и функциональности веб-приложений. Backend-разработчики отвечают за проектирование, разработку и обслуживание серверной части веб-приложений.",
            link: "https://ru.wikipedia.org/wiki/Back-end_%D0%B1%D0%B0%D0%B7%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85",
        },
        {
            title: "Mobile development",
            des: "Мобильная разработка включает в себя создание приложений, которые работают на мобильных устройствах, таких как смартфоны и планшеты. Для создания мобильных приложений требуется использование таких языков программирования, как Java или Kotlin для Android и Swift для iOS. Мобильные разработчики несут ответственность за проектирование, разработку и поддержку мобильных приложений.",
            link: "https://ru.wikipedia.org/wiki/Flutter",
            img: "./images/mobile.png"
        },
        {
            title: "Project Managment",
            des: "Управление проектами включает в себя планирование, выполнение и мониторинг проектов, чтобы гарантировать их завершение в рамках заданных сроков, бюджета и стандартов качества. Руководители проектов несут ответственность за определение объема, целей и задач проекта, создание плана проекта, распределение ресурсов и управление рисками и проблемами, которые могут возникнуть в течение жизненного цикла проекта. ",
            link: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%D0%BC%D0%B8",
            img: "./images/pm.png"
        }
    ]

    const renderTexhno = useMemo(() => technologies.map((el, i) =>
        <a key={`${el.link}_${i}`} href={el.link} target="_blank" rel="noreferrer" className={scss.itemBox}>
            <h1>{el.title} <span><img src={el.img} alt="" /></span></h1>
            <p>{el.des}</p>
        </a>
    ), [technologies]);

    return (
        <div id="directions" className={scss.wrapper}>
            <div className="container">
                <div className={scss.layout}>
                    {renderTexhno}
                </div>
            </div>
        </div>
    )
}

export default Technology;