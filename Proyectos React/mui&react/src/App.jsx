import './App.css';
import {
  Button, 
  Paper, 
  Container, 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer, 
  IconButton, 
  Toolbar,
  AppBar
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import Box from '@mui/material/Box';
import InboxIcon from "@mui/icons-material/Inbox";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import NavListDrawer from './components/Navbar/NavListDrawer';
import MenuIcon from "@mui/icons-material/Menu";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import { NavLink } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const mainList = [
  {
    text: "Inbox",
    icon: <InboxIcon />,
    href: "#inbox",
  },
  {
    text: "Drafts",
    icon: <DraftsIcon />,
    href: "#drafts",
  },
];

const secondaryList = [
  {
    text: "Trash",
    href: "#trash",
  },
  {
    text: "Spam",
    href: "#spam",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar/>
      <Container sx={{ mt: 5 }}>
        asdasd
      </Container>
    </>

  );
}

export default App;
