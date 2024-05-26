import { BackgroundImage, Box, Burger, Flex, Group, Image, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

//see RouteObject in App.tsx for context
const links: {
  link: string;
  label: string;
}[] = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About Us" },
  { link: "/media", label: "Media" },
  { link: "/benefits", label: "Benefits" },
  { link: "/first", label: "What is FIRST?" },
  { link: "/events", label: "Events" },
  { link: "/sponsor", label: "Sponsor/Donate" },
  { link: "/contact", label: "Contact Us" },
];

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 75em)");
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const items = links.map(({ link, label }) => (
    <Link key={label} to={link} className={classes.link} data-active={active === link || undefined}>
      <Text c={active === link ? "black" : "pr-yellow"} size="xl" fw="bold" lh={1}>
        {label.toLocaleUpperCase()}
      </Text>
    </Link>
  ));

  return (
    <header>
      {/* repeat is on to fix image disapearing on smaller screens */}
      <BackgroundImage src="/images/award.webp" bgsz="cover" bgr="repeat" bgp="0 -650px" bga="local" mb={0} h={120}>
        <Box bg="rgba(0, 0, 0, 0.7)">
          {/* <Overlay opacity={0.7} color="black" /> */}

          <Box size="md" ml={isMobile ? 0 : 80} mr={80}>
            <Flex h={120} justify="space-between" align="center">
              <Image
                w={"auto"}
                mah={"80%"}
                mr={20}
                src={"/images/logo1.png"}
                alt="Penticton Robotics logo"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
              <Group gap={5} visibleFrom="lg">
                {items}
              </Group>

              <Burger color="pr-yellow" opened={opened} onClick={toggle} hiddenFrom="lg" size="md" />
            </Flex>
          </Box>
        </Box>
      </BackgroundImage>
    </header>
  );
}
