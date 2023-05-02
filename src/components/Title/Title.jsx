import React from "react";
import scss from "./Title.module.scss";
const Title = () => {
    return (
        <>
            <div className={scss.wrapper}>
                <div className="container">
                    <div className={scss.content}>
                        <div className={scss.mainTitle}>
                            <h1>Solid Practicum</h1>
                            <h2>Мы предлагаем уникальную возможность для студентов и выпускников получить практический опыт работы в сфере IT и углубить свои знания и навыки в различных областях</h2>
                            <p>Присоединяйтесь к нашей команде и станьте частью нашей миссии создания инновационных решений для будущего!</p>
                            <div className={scss.potok}>
                                <div className={scss.summer}>
                                    <p> Летняя стажировка</p>
                                </div>
                                -
                                <div className={scss.start}>
                                    <p>Старт первого июня</p>
                                </div>
                            </div>
                            <a href="https://forms.gle/5zkTnxdLdMLv4iCL7" target="_blank" rel="norefferer" className={scss.btn}>
                                <span className={scss.text}>Начать стажироваться</span>
                            </a>
                        </div>
                        <div className={scss.mainImg}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title;