import React, { useState } from "react";
import scss from "./questionCard.module.scss";

const QuestionCard = ({ title, answer }) => {
    const [isActive, setActive] = useState(true)
    return (
        <div onClick={() => setActive(!isActive)} className={scss.wrapper}>
            <h1>{title} <span className={isActive ? scss.plusAc : scss.plus}></span></h1>
            {
                isActive && <p>{answer}</p>
            }
        </div>
    )
}

export default QuestionCard;