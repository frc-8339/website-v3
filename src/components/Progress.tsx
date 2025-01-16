import { Flex, Progress as Pg, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { objectives } from "../lib/constants";
import CountdownTimer from "./CountdownTimer";

export default function Progress() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  const currentObjective = objectives.find((objective) => objective.date > new Date()) ?? objectives[objectives.length - 1];
  const currentObjectiveIndex = objectives.indexOf(currentObjective);
  const lastObjective = objectives[currentObjectiveIndex - 1] ?? objectives[0];

  const progress = ((currentObjective.date.getTime() - Date.now()) / (currentObjective.date.getTime() - lastObjective.date.getTime())) * 100;

  return (
    <Flex w={isMobile ? "90vw" : "35vw"} align="center" direction="column">
      <Title order={1} ta="center" mb={"lg"} w="100%">
        {currentObjective.name}
      </Title>

      {/* <Tooltip label={currentObjective.name}> */}
      <Pg w="100%" size="lg" value={progress} />
      {/* </Tooltip> */}

      <CountdownTimer date={currentObjective.date} />
    </Flex>
  );
}
