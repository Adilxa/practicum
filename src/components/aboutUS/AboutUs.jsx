import React from "react";
import scss from "./AboutUs.module.scss";

const AboutUs = () => {
    const text = [
        "Наша программа охватывает различные направления: Project management, Mobile development, UX/UI ,Front-end и Back-end разработка. ",
        "Что такое бесконечная стажировка? Это возможность работать в нашей команде на протяжении неопределенного периода времени. Это даёт вам уникальную возможность постоянно учится и развиваться в IT-сфере, совершенствуя свои навыки и получая опыт работы с новыми технологиями.",
        "В течении стажировки вы будете работать с опытными разработчиками, получать обратную связь по вашей работе и повышать свой уровень. Проекты будут управляться по Scrum и Agile.",
        "Мы предлагаем стажировку в инновационной среде, где вы сможете получить реальный опыт работы в IT и узнать все тонкости разработки программного обеспечения."
    ]
    return (
        <div className={scss.wrapper} id="aboutus">
            <div className="container">
                <h1>О Нас</h1>
                <div className={scss.insideWrapper}>
                    {
                        text.map((el, i) => <div className={scss.card} key={`${el}_${i}`}><p>{el}</p></div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default AboutUs;