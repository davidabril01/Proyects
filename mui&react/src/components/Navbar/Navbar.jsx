import { Box, Container, AppBar, Button, Drawer, Toolbar, IconButton, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const navLinks = [
    {
        title: "Home", Path: "#", icon: <InboxIcon />
    },
    {
        title: "Login", Path: "#login", icon: <DraftsIcon />
    },
    {
        title: "Register", Path: "#register", icon: <MenuIcon />
    },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{display: {xs: "block", sm: "none"}}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Box sx={{display: {xs: "none", sm: "block"}}}>


                        {navLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component="a"
                                href={item.Path}
                            >
                                {item.title}
                            </Button>
                        ))}

                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>
        </>
    );
}