import { Button } from "@mantine/core";
import { useNavigate } from "react-router";

export default function TopButton({ title, url }: { title: string; url: string }) {
  // const isMobile = useMediaQuery("(max-width: 48em)");

  const navigate = useNavigate();

  return (
    <Button bg="black" c="pr-yellow" size="4rem" fw="bold" fz="h3" m="md" mb="0" w="100%" variant="filled" radius="sm" onClick={() => navigate(url)}>
      {title}
    </Button>
  );
}
