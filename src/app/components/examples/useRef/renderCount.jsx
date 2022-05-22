import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setotherState] = useState(false);
    const togglOtherstate = () => {
        setotherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />

            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={togglOtherstate}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
