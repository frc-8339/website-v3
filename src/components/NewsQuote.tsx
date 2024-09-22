import { Flex, Image, Text } from "@mantine/core";

export default function NewsQuote({
  quote,
  image,
  isMobile,
}: {
  quote: string;
  image?: {
    src: string;
    srcSet?: string;
  };
  isMobile?: boolean;
}) {
  return (
    <Flex align="center" justify="center" direction="column">
      <Text fz="4vh" fw="bold" lh={1.1} maw="80vw">
        {quote}
      </Text>
      {image && <Image mt="lg" {...(!isMobile ? { mah: "10vh", w: "auto" } : { h: "auto", maw: "50vw" })} srcSet={image?.srcSet} src={image.src} />}
    </Flex>
  );
}
