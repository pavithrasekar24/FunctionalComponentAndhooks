import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
var dateFormat = require("dateformat");

function createData(name, date) {
  return { name, date };
}

const rows = [
  createData("Type", "05/02/2020"),
  createData("Push", "11/12/2020"),
  createData("Pop", "12/11/2020"),
  createData("Add", "06/05/2020"),
  createData("Delete", "04/04/2020")
];

export default function SimpleTable() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tableRow, setTableRow] = useState(rows);
  const handleEndChange = e => {
    setEndDate(e.target.value);
  };
  const handleStartChange = e => {
    setStartDate(e.target.value);
  };
  const handleSubmit = () => {
    alert(startDate + " " + endDate);
    let newData = [];
    let sDate = dateFormat(startDate, "dd-mm-yyyy");
    let eDate = dateFormat(endDate, "dd-mm-yyyy");
    if (startDate && endDate) {
      rows.map((value, i) => {
        let rowDate = dateFormat(value.date, "dd-mm-yyyy");
        if (sDate < rowDate && rowDate > eDate) {
          newData.push(value);
        }
      });
      setTableRow(newData);
    }
  };
  return (
    <div>
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={handleStartChange}
      />
      <input
        type="date"
        name="endDate"
        min={startDate}
        value={endDate}
        onChange={handleEndChange}
      />
      <button onClick={handleSubmit}>Apply</button>
      <TableContainer
        style={{ width: "75%", textalign: "center" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRow.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
