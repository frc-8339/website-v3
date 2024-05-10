import { Text, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useInterval } from "@mantine/hooks";

function calculateTimeLeft(date: Date) {
    const difference = date.getTime() - new Date().getTime();
    if (difference <= 0)
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };


    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
}

export default function CountdownTimer({ date }: { date: Date }) {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date));

    const interval = useInterval(() => setTimeLeft(calculateTimeLeft(date)), 1000);

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, [date]);

    return (
        <Title fz={100}>{timeLeft.days.toString().padStart(2, "0")}:{timeLeft.hours.toString().padStart(2, "0")}:{timeLeft.minutes.toString().padStart(2, "0")}:{timeLeft.seconds.toString().padStart(2, "0")}</Title>
    )
}