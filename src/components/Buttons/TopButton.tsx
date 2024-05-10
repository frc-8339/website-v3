import { Box, Button } from "@mantine/core";

export default function TopButton({ title, url }: { title: string, url: string }) {
    return(
        <Box>
            <Button color="black" w={"1500px"} variant="filled" radius={"sm"} component="a" href={url}><p color="fbb416">{title}</p></Button>
        </Box>
    )

 }