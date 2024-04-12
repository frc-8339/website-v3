import { Box, Burger, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const links = [
  { link: "/about", label: "About Us" },
  { link: "/media", label: "Media" },
  { link: "/benefits", label: "Benefits" },
  { link: "/first", label: "What is FIRST?" },
  { link: "/sponsor", label: "Sponsor/Donate" },
  { link: "/contact", label: "Contact Us" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link} data-active={active === link.link || undefined}>
      {link.label.toUpperCase()}
    </Link>
  ));

  return (
    <header>
      <Box className={classes.header}>
        <Box className={classes.overlay}>
          <Box size="md" ml={80} mr={80}>
            <Box className={classes.inner}>
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
            </Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
}
