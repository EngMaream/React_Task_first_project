import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Star = () => {
    const container = useRef(null);
    const container2 = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./star.json"),
        });
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./lunch.json"),
        });
    }, []);

    return (
        <>
            <div
                className=" grid grid-cols-2 grid-rows-2
              gap-4 h-100 w-100 ">
                <div ref={container}></div>
                <div ref={container2}></div>
            </div>
        </>
    );
};

export default Star;
