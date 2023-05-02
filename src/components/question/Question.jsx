import React, { useMemo } from "react";
import scss from "./question.module.scss";
import QuestionCard from "./card/QuestionCard";

const Question = () => {
    const questionArr = [
        {
            title: "Как помогает Solid Practicum улучшить навыки программирования?",
            answer: "Solid Practicum предлагает практические задачи и опыт работы с инструментами, такими как Git, GitHub, Jira и Docker, что помогает участникам программы развивать навыки программирования."
        },
        {
            title: "Что получат участники программы Solid Practicum?",
            answer: "Крутое окружение, отлично отточенные навыки, работа с ребятами с другого направления"
        },
        {
            title: "Какова длительность программы Solid Practicum?",
            answer: "Длится БЕСКОНЕЧНО!"
        },
    ]

    const renderQuestions = useMemo(() => questionArr.map((el) =>
        <QuestionCard key={`${el.title}_${el.answer}`} {...el} />
    ), [questionArr])

    return (
        <div className={scss.wrapper}>
            {renderQuestions}
        </div>
    )
}

export default Question;