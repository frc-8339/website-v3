import { Button } from "@mantine/core";
import { useNavigate } from "react-router";

export default function HomeTopButton({ title, url }: { title: string; url: string }) {
  // const isMobile = useMediaQuery("(max-width: 48em)");

  const navigate = useNavigate();

  return (
    <Button
      bg="pr-yellow"
      c="black"
      // size="4rem"
      my={"xs"}
      fw="bold"
      fz="h4"
      w="100%"
      variant="filled"
      radius="sm"
      onClick={() => {
        if (url.startsWith("/")||url.startsWith("#")) navigate(url);
        else window.open(url, "_blank");
      }}
    >
      {title}
    </Button>
  );
}
