import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import porfileImg from "../assets/profile-img.png";
import "../App.css";
import Navbar from "./Navbar";
import Payments from "./Payments";
import DrawerList from "./DrawerList";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  borderRadius: "5px",
  margin: "16px 10px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        elevation={0}
        style={{ borderBottom: "1px solid #D9D9D9" }}
      >
        <Toolbar
          style={{
            background: "white",
            color: "black",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", fontSize: "15px" } }}
          >
            Payments
          </Typography>
          <HelpOutlineIcon
            style={{ fontSize: "medium", color: "#4D4D4D", marginLeft: "16px" }}
          />
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "#4D4D4D",
                fontSize: "12px",
                marginLeft: "6px",
              },
            }}
          >
            How it Works
          </Typography>
          <Navbar />
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#1E2640",
            color: "white",
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <div className="profile-box">
            <img src={porfileImg} />
            <div style={{ fontSize: "12px", paddingLeft: "12px" }}>
              <p className="profile-name">Ayaz Idrisi</p>
              <a className="visit-store">Visit Store</a>
            </div>
          </div>

          <div>
            <IconButton>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <KeyboardArrowDownIcon
                  style={{ color: "white", fontSize: "30px" }}
                />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <DrawerList />
        <DrawerFooter style={{ marginTop: `auto`, background: "#353c53" }}>
          <div className="profile-box">
            <div className="wallet-icon-box">
              <AccountBalanceWalletOutlinedIcon
                style={{ height: "24px", width: "24px" }}
              />
            </div>
            <div style={{ fontSize: "12px", paddingLeft: "12px" }}>
              <p
                className="profile-name"
                style={{ color: "rgb(173, 173, 173)" }}
              >
                Availabe Credits
              </p>
              <p className="profile-name" style={{ fontWeight: "lighter" }}>
                222.10
              </p>
            </div>
          </div>
        </DrawerFooter>
      </Drawer>
      <Box
        className="payment-box"
        component="main"
        sx={{ flexGrow: 1, p: 3, background: "#FAFAFA" }}
      >
        <DrawerHeader />
        <Payments />
      </Box>
    </Box>
  );
}
