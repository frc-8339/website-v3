import { Box, Title } from "@mantine/core";
import { useInterval, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

function calculateTimeLeft(date: Date) {
  const difference = date.getTime() - new Date().getTime();
  if (difference <= 0)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({ date }: { date: Date }) {
  const isMobile = useMediaQuery("(max-width: 48em)");

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date));

  const interval = useInterval(() => setTimeLeft(calculateTimeLeft(date)), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [date]);

  return (
    <Box>
      <Title fz={isMobile ? "12vw" : "100"}>
        {timeLeft.days.toString().padStart(2, "0")}:{timeLeft.hours.toString().padStart(2, "0")}:{timeLeft.minutes.toString().padStart(2, "0")}:
        {timeLeft.seconds.toString().padStart(2, "0")}
      </Title>
    </Box>
  );
}
