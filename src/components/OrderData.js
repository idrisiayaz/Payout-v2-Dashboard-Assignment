import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
  createData("#281209", "7 July, 2023", "₹1,278.23", "₹22"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={0} style={{ padding: "12px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#F2F2F2" }}>
            <TableCell>Order ID</TableCell>
            <TableCell
              align="right"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ArrowDropDownIcon style={{ fontSize: "small" }} />
              Order Date
            </TableCell>
            <TableCell align="right">Order amount</TableCell>
            <TableCell
              align="right"
              style={{ display: "flex", alignItems: "center" }}
            >
              <InfoOutlinedIcon style={{ fontSize: "small" }} />
              Transaction fees{" "}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color: "#146EB4"}}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{display: 'flex', justifyContent: 'center', padding: "24px"}}>
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </TableContainer>
  );
}
