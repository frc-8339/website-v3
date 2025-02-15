import { Flex, Image, Text } from "@mantine/core";
import type { Sponsor } from "../lib/constants";
import { sponsors } from "../lib/constants";

function Sponsor({ name, badge, link }: Sponsor) {
  return (
    <a href={link}>
      <Image src={badge} alt={`Sponsor ${name}`} w="22vw" m="3vw" />
    </a>
  );
}

export default function Sponsors({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <Flex align="center" direction="column" pt="md">
      <Text c="pr-yellow" fz="8vh" fw="bold" style={{ textShadow: "0.64vh 0.64vh #000" }}>
        Sponsors
      </Text>
      <Flex align="center" justify="center" wrap="wrap">
        {sponsors
          .filter((sponsor) => ["diamond", "platinum", "gold", "silver"].includes(sponsor.tier))
          .map((sponsor) => (
            <Sponsor key={sponsor.name} {...sponsor} />
          ))}
      </Flex>
    </Flex>
  );
}

Sponsors.defaultProps = { sponsors };
