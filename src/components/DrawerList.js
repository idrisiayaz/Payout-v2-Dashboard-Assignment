import React from "react";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

import "../App.css";

const DrawerList = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <HomeOutlinedIcon />
            <ListItemText
              primary="Home"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <InventoryOutlinedIcon />
            <ListItemText
              primary="Orders"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <GridViewOutlinedIcon />
            <ListItemText
              primary="Products"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <LocalShippingOutlinedIcon />
            <ListItemText
              primary="Delivery"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <CampaignOutlinedIcon />
            <ListItemText
              primary="Marketing"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <LeaderboardOutlinedIcon />
            <ListItemText
              primary="Analytics"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <PaymentsOutlinedIcon />
            <ListItemText
              primary="Payments"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <NearMeOutlinedIcon />
            <ListItemText
              primary="Tools"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <DiscountOutlinedIcon />
            <ListItemText
              primary="Discounts"
              sx={{
                opacity: open ? 1 : 0,
                marginLeft: "12px",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerList;
