import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const prevState = useRef();
    const inputRef = useRef();
    const [otherState, setotherState] = useState("Блок");
    const togglOtherstate = () => {
        setotherState((prevState) => (prevState === "text" ? "Блок" : "text"));
        if (inputRef.current.style.width && inputRef.current.style.height) {
            inputRef.current.style.width = "";
            inputRef.current.style.height = "";
        } else {
            inputRef.current.style.width = "150px";
            inputRef.current.style.height = "80px";
        }
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={inputRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{otherState}</small>
            </div>
            <div className="card  my-2">
                <button className="btn btn-primary" onClick={togglOtherstate}>
                    кнопка
                </button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
