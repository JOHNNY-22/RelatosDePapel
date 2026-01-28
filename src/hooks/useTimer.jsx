import { useEffect, useState } from "react";

export const useTimer = (initialSeconds) => {
    const [seconds, setseconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;

        const intervalId = setInterval(() => {
            setseconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds]);

    return seconds;
}