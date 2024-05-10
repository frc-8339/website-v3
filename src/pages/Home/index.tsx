import { Box, Image, Flex } from "@mantine/core";
import classes from "./index.module.css"
import TopButton from "../../components/Buttons/TopButton";
import CountdownTimer from "../../components/CountdownTimer";

const competitionDate = new Date(1736010000000)

export default function Home() {
  return (
    <Box>
      <Box className={classes.content}>
        <Flex className={classes.overlay} justify={"center"}>
          <Image className={classes.logo} mah={"30vh"} w={"auto"} src="/images/First+8339LogoBlack.webp" />

          <CountdownTimer date={competitionDate} />

          <TopButton title="Student Benefits" url="#"/>
          
        </Flex>
      </Box>
    </Box>
  );
}
