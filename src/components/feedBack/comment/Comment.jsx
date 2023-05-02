import React from "react";
import scss from "./comment.module.scss";

const Comment = ({ name, des, id, handleClick, active }) => {

    return (
        <div className={scss.card}>
            <div className={scss.top_block}>
                <div className={scss.name}>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className={scss.line}></div>
            <div className={scss.des}>
                {active ? (
                    <p className={scss.nonAc}>
                        {des}
                        <div onClick={() => handleClick(id, "toNonActive")}>
                            {active ? "Скрыть" : ""}
                        </div>
                    </p>
                ) : (
                    <p>
                        {des.substr(0, 100)}...
                        <span onClick={() => handleClick(id, "toActive")}>
                            {active ? "" : "Читать полностью"}
                        </span>
                    </p>
                )}
            </div>
        </div>
    )
}

export default Comment