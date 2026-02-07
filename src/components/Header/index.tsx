import { Box, Burger, Drawer, Flex, Group, Image, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import classes from "./index.module.css";
import "@fontsource/audiowide/400.css";

import logo from "./pr logo.svg";

//see RouteObject in App.tsx for context
const links: {
  link: string;
  label: string;
}[] = [
  { link: "/", label: "Home" },
  // { link: "https://www.twitch.tv/firstinspires1", label: "Live" },
  { link: "/about", label: "About Us" },
  { link: "/media", label: "Media" },
  { link: "/power", label: "Sponsor/Donate" },
  { link: "/first", label: "What is FIRST?" },
  { link: "/benefits", label: "Benefits" },
  // { link: "/events", label: "Events" },
  { link: "/contact", label: "Contact Us" },
];

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 75em)");
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, drawerControls] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const items = links.map(({ link, label }) => (
    <Link key={label} to={link} className={classes.link} data-active={active === link || undefined} onClick={drawerControls.close}>
      <Text c={active === link ? "black" : "pr-yellow"} size="xl" fw="bold" lh={1}>
        {label.toLocaleUpperCase()}
      </Text>
    </Link>
  ));

  return (
    <header>
      {/* repeat is on to fix image disapearing on smaller screens */}
      <Drawer
        opened={opened}
        onClose={drawerControls.toggle}
        padding="md"
        position="right"
        closeButtonProps={{ size: "xl" }}
        styles={{ content: { backgroundColor: "black" }, header: { backgroundColor: "black" }, close: { color: "white", backgroundColor: "black" } }}
      >
        <Flex direction="column" align="center">
          {items}
        </Flex>
      </Drawer>

      <Box bg="black" size="md" pl={isMobile ? 0 : 80} pr={80}>
        <Flex h={120} justify="space-between" align="center">
          <Flex w={100} align="center">
            <Image mr={20} src={logo} alt="Penticton Robotics logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")} />

            <Text c="pr-yellow" fz={isMobile ? 35 : 50} lh={1} fw={500} ta="center" ff="Audiowide">
              Penticton Robotics
            </Text>
          </Flex>

          <Group gap={5} visibleFrom="lg">
            {items}
          </Group>

          <Burger color="pr-yellow" opened={opened} onClick={drawerControls.toggle} hiddenFrom="lg" size="md" />
        </Flex>
      </Box>
    </header>
  );
}
