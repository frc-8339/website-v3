import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box>
      <Text>Home</Text>
    </Box>
  );
}
