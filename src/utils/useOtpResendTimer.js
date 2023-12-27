// import React from "react";
import  { useState, useEffect } from "react";


function useOtpResendTimer(sec) {
    const [seconds, setSeconds] = useState(sec);
    const [active, setActive] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        let i;
        if (active && seconds > 0) {
            i = setInterval(() => {
                setSeconds((prev) => prev - 1);

            }, 1000)
        } else if (seconds === 0) {
            setActive(false);
            setTimerFinished(true);
            setSeconds(sec);
        }

        return () => clearInterval(i);
    }, [active, seconds, sec]);

    const startTimer = () => {
        setActive(true);
        setTimerFinished(false);
    };

    const resetTimer = () => {
        setActive(false);
        setSeconds(sec);
        setTimerFinished(false)
    }


    return { seconds, active, timerFinished, startTimer, resetTimer }
}



export default useOtpResendTimer;