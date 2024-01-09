import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchData from "./SearchData";

const Payments = () => {
  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            background: "#FAFAFA",
            color: "black",
            boxShadow: "none",
            padding: "0px",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Overview
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
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
            Last Month
          </Button>
        </Toolbar>
      </AppBar>
      <div class="grid-container">
        <div
          className="grid-container-item"
          style={{ fontSize: "12px", padding: "20px" }}
        >
          <p className="grid-data-name">Availabe Credits</p>
          <h1 className="profile-name" style={{ fontWeight: "lighter" }}>
            231
          </h1>
        </div>
        <div
          className="grid-container-item"
          style={{ fontSize: "12px", padding: "20px" }}
        >
          <p className="grid-data-name">Amount received</p>
          <h1 className="profile-name" style={{ fontWeight: "lighter" }}>
            ₹23,92,312.19
          </h1>
        </div>
      </div>
      <div>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block", marginBottom: "20px" } }}
        >
          Transaction | This Month
        </Typography>
      </div>
      <SearchData />
    </div>
  );
};

export default Payments;
