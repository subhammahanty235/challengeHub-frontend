import React, { useState } from 'react'
import './expandedChallenge.scss'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import AddIcon from '../../assets/icons/plus-icon.svg'
import { Checkbox, Dialog } from '@mui/material';
const ExpandedChallenge = () => {

  const [openJoinPopup, setopenJoinPopup] = useState(true)

  return (
    <div className='expanded_challenge'>
      <div className="name_description_box">
        <div className="name_joinNow">
          <p className="name">Code Challenge</p>
          <button className='join_btn'>Join Challenge</button>

        </div>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo est mollitia minima ex fugit beatae dicta excepturi quas ipsum, provident iste dolores quos nisi, aperiam nobis, quidem esse alias aliquid. Asperiores, odit repudiandae.</p>
      </div>

      <div className="moredetails">
        {/* #1a1a1a */}
        <TableContainer component={Paper} sx={{ boxShadow: "-1px 0px 20px 1px #1a1a1a" }}>
          <Table sx={{ backgroundColor: "#242424", border: "1px solid #646cff", color: "#fff" }}>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Created</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>12-10-2025</TableCell>
            </TableHead>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Created</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>12-10-2025</TableCell>
            </TableHead>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Created</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>12-10-2025</TableCell>
            </TableHead>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Created</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>12-10-2025</TableCell>
            </TableHead>
          </Table>
        </TableContainer>
      </div>

      {/* Popup or Dialog box to confirm user */}
      <Dialog open={openJoinPopup}>
        <div className="join_popup">
          <p>Wanna Join?</p>
          <p>Once joined, there's only two Options <br />Completed or Failed</p>
          <p>Ready?</p>
          <div className="startfromtoday">
            
            <Checkbox
              // style={{ color: "#fff" }}
              checked={false}
              onChange={(e) => {
                // setincludeStartDate(e.target.checked)
                console.log("Clicked")
              }}
            />
            <p>Start From Today.</p>
          </div>

        </div>
      </Dialog>

      <div className="open_create_new">
        <img src={AddIcon} alt="" /><span>Create New</span>
      </div>
    </div>
  )
}

export default ExpandedChallenge