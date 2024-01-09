import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Button from "@mui/material/Button";
import "../App.css";
import OrderData from "./OrderData";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchData() {
  return (
    <AppBar
      position="static"
      elevation={0}
      style={{
        background: "white",
        borderRadius: "10px",
      }}
    >
      <Toolbar
        style={{
          color: "black",
          boxShadow: "none",
          padding: "0px",
          boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
        }}
      >
        <Search
          style={{
            width: "248px",
            backgroundColor: "white",
            color: "grey",
            border: "0.1px solid #D9D9D9",
            height: "34px",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon style={{ height: "34px" }} />
          </SearchIconWrapper>
          <StyledInputBase
            style={{ height: "32px" }}
            placeholder="Search by order ID…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="outlined"
          endIcon={<SwapVertIcon />}
          style={{
            padding: "4px 16px",
            marginRight: "10px",
            boxShadow: "none",
            fontSize: "14px",
            border: "1px solid",
            minWidth: "0px",
            backgroundColor: "white",
            color: "#4D4D4D",
            borderColor: "#D9D9D9",
            textTransform: "none",
          }}
        >
          Sort
        </Button>
        <Button
          className="lasy-month-button"
          variant="outlined"
          style={{
            padding: "4px",
            marginRight: "10px",
            boxShadow: "none",
            fontSize: 16,
            border: "1px solid",
            minWidth: "0px",
            backgroundColor: "white",
            color: "#4D4D4D",
            borderColor: "#D9D9D9",
          }}
        >
          <SaveAltIcon />
        </Button>
      </Toolbar>
      <OrderData />
    </AppBar>
  );
}
