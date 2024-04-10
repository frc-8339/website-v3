import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import classes from "./index.module.css";

export default function Content() {
    return (
        <Box style={{ color: "white" }} className={classes.wrapper}>
            <NavBar />
            <Outlet />
        </Box>
    );
}