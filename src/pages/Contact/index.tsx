import { BackgroundImage, Box, Flex, Image, Space, Table, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import marcusFixingRobot from "./IMG_0461.webp";

import { IconBrandDiscord, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMail, IconPhone } from "@tabler/icons-react";

import walkerFallback from "./walker.png";
import walker from "./walker.png?w=256;512;768;1024&format=webp;png&as=srcset&imagetools";

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 62em)");

  return (
    <Box bg="black">
      <Flex align="center" direction="column" id="contact">
        <BackgroundImage src={marcusFixingRobot} bgsz="cover" style={{ backgroundPositionY: "center" }}>
          <Box bg="#00000080">
            <Text
              maw="40vw"
              fz={isMobile ? "10vw" : "5vw"}
              fw="bolder"
              ff="Audiowide"
              lh="1.2"
              style={{
                textShadow: isMobile ? "1.6vw 1.6vw #000" : "0.8vw 0.8vw #000",
                paddingBottom: 0,
                paddingLeft: "10%",
              }}
              ta={isMobile ? "center" : "left"}
            >
              Contact Us
            </Text>
          </Box>
        </BackgroundImage>

        <Flex direction="column" m="lg">
          <Text
            fz="4.5rem"
            fw="bold"
            ta="center"
            style={{
              textShadow: "0.6vh 0.6vh #000",
              paddingBottom: 0,
              // paddingLeft: "10%",
            }}
          >
            Our Mentor
          </Text>

          <Image src={walkerFallback} srcSet={walker} alt="Mr. Josh Walker" h="4rem" radius="50%" bd="8px solid pr-yellow" />

          <Text fz="3rem" m="lg" ta="center">
            Mr. Josh Walker
          </Text>

          <Space h="0.5rem" />

          {!isMobile ? (
            <Table fz="h2" withRowBorders={false}>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    <IconPhone /> Phone
                  </Table.Td>
                  <Table.Td>
                    <a href="tel:+12507707620">+1 (250) 770-7620 ext. 7205</a>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <IconMail /> Email
                  </Table.Td>
                  <Table.Td>
                    <a href="mailto:jwalker@sd67.bc.ca">jwalker@sd67.bc.ca </a>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          ) : (
            <Flex direction="column">
              <Text fz="h2">
                <IconPhone /> Phone: <a href="tel:+12507707620">+1 (250) 770-7620 ext. 7205</a>
              </Text>
              <Text fz="h2">
                <IconMail /> Email: <a href="mailto:jwalker@sd67.bc.ca">jwalker@sd67.bc.ca</a>
              </Text>
            </Flex>
          )}

          <Space h="2rem" />

          <Text fz="3rem" ta="center" m="lg">
            Other Inquiries
          </Text>
          <Text fz="h2" ta="center">
            <IconMail /> Email: <a href="mailto:penticton.robotics@gmail.com">penticton.robotics@gmail.com</a>
          </Text>
          <Text fz="h2" ta="center">
            <IconBrandDiscord /> Discord: <a href="https://discord.com/users/1176298206309646401"> @3rinaaa (Kim) </a>
          </Text>

          <Space h="2rem" />

          <Text fz="3rem" ta="center" m="lg">
            Social Media
          </Text>
          <Text fz="h2" ta="center">
            <IconBrandInstagram /> Instagram: <a href="https://instagram.com/penticton_robotics"> @penticton_robotics</a>
          </Text>
          <Text fz="h2" ta="center">
            <IconBrandFacebook /> Facebook: <a href="https://facebook.com/penticton.robotics"> @penticton.robotics</a>
          </Text>
          <Text fz="h2" ta="center">
            <IconBrandYoutube /> YouTube: <a href="https://youtube.com/@pentictonrobotics"> @pentictonrobotics</a>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
