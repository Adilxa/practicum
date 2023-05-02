import React, { useMemo, useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import scss from "./feedBack.module.scss";
import Comment from "./comment/Comment";
import Question from "../question/Question";

const FeedBack = () => {
    const [comments, setComments] = useState([
        { id: 1, name: "Иван", des: "Я получил невероятный опыт в Solid Practicum! Менторы были невероятно поддерживающими и компетентными. Я многое узнал в течение своего пребывания там и почувствовал себя намного увереннее в своих навыках." },
        { id: 2, name: "Анна", des: "Solid Practicum предоставил мне отличную возможность работать над реальными проектами и внести значимый вклад. Я чувствовала, что я часть команды, и мои идеи были ценными. Программа действительно превзошла мои ожидания!" },
        { id: 3, name: "Михаил", des: "Я бы настоятельно рекомендовал Solid Practicum всем, кто ищет ценный опыт обучения. Программа была хорошо структурирована, и менторы всегда были готовы ответить на вопросы и оказать помощь. В целом, это был фантастический опыт!" },
        { id: 4, name: "Ксения", des: "Solid Practicum дал мне возможность применить то, что я училась в школе, к реальным проблемам. Менторы были терпеливыми и помогли мне развиваться как программисту. Это был отличный опыт!" },
        { id: 5, name: "Дмитрий", des: "Программа была сложной, но она также была очень наградительной. Я многое узнал и поработал над действительно интересными проектами. Благодаря Solid Practicum, я чувствую себя намного лучше подготовленным к карьере в технологической сфере." },
        { id: 6, name: "Екатерина", des: "Я была впечатлена тем, как организована программа. График был хорошо спланирован, и менторы всегда были готовы давать обратную связь по моей работе. Я определенно рекомендую эту программу другим!" },
    ])

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];

    const handleClick = (id, state) => {
        const filtered = [...comments].find((comment) => comment.id === id);
        if (state === "toActive") {
            const arr = comments.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: true };
                }
                return { ...el, active: false };
            });
            setComments(arr);
        } else {
            const arr = comments.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: false };
                }
                return { ...el, active: false };
            });
            setComments(arr);
        }
    };

    const renderComment = useMemo(() => comments.map((el) =>
        <Comment handleClick={handleClick} key={`${el}_${el.name}`} {...el} />
    ), [comments])


    const buttonStyle = {
        width: "10px",
        background: 'none',
        border: '0px',

    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}>
            <img style={{ marginLeft: "-50px" }} src="./images/arrowL.png" alt="" />
        </button>,
        nextArrow: <button style={{ ...buttonStyle }}>
            <img style={{ marginRight: "-50px" }} src="./images/arrowR.png" alt="" />
        </button>
    }

    return (
        <div className={scss.wrapper} id="feedback">
            <div className="container">
                <h1 className={scss.title}>Отзывы от Стажеров</h1>
                <Slide {...properties} autoplay={false} responsive={responsiveSettings}>
                    {renderComment}
                </Slide>
            </div>
            <div className="container">
                <h1 className={scss.title}>Вопрос / Ответ</h1>
                <Question />
            </div>
        </div>
    )
}

export default FeedBack;