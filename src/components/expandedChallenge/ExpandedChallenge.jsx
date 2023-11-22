import React, { useState } from 'react'
import './expandedChallenge.scss'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import AddIcon from '../../assets/icons/plus-icon.svg'
// import { Checkbox, ClickAwayListener, Dialog } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { JoinPopup, JoinedPopup } from '../../common/dialog/Dialogs';
import { dateFormattingHelper } from '../../utils/dateformatter'
import { useNavigate } from 'react-router-dom';
const ExpandedChallenge = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { expandedch, joined } = useSelector((state) => state.challenge)
  const [openJoinPopup, setopenJoinPopup] = useState(false)

  const navigatetoHomepage = () => {
    dispatch({
      type:"CLEAR_CREATE_CHALLENGE_TEMP"
    })
    navigate('/')
  }






  return (
    <div className='expanded_challenge'>
      <div className="name_description_box">
        <div className="name_joinNow">
          <p className="name">{expandedch?.name}</p>
          <button className='join_btn' onClick={() => { setopenJoinPopup(true) }}>Join Challenge</button>

        </div>
        <p className="description">{expandedch?.description}</p>
      </div>

      <div className="moredetails">
        {/* #1a1a1a */}
        <TableContainer component={Paper} sx={{ boxShadow: "-1px 0px 20px 1px #1a1a1a" }}>
          <Table sx={{ backgroundColor: "#242424", border: "1px solid #646cff", color: "#fff" }}>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Created</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>{dateFormattingHelper(expandedch?.created)}</TableCell>
            </TableHead>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Duration</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>{expandedch?.noOfdays} Days</TableCell>
            </TableHead>
            <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Total Participations</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>{expandedch?.totalCrowd}</TableCell>
            </TableHead>
            {/* <TableHead>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>Created</TableCell>
              <TableCell sx={{ color: "#fff", fontSize: "large", fontWeight: 500, border: "1px solid #646cff" }} align='center'>12-10-2025</TableCell>
            </TableHead> */}
          </Table>
        </TableContainer>
      </div>

      {/* Popup or Dialog box to confirm user */}
      {
        joined === true ?
          <JoinedPopup open={joined} navigate={navigatetoHomepage} /> :
          <JoinPopup open={openJoinPopup} setOpen={setopenJoinPopup} challenge={expandedch} />

      }



      <div className="open_create_new">
        <img src={AddIcon} alt="" /><span>Create New</span>
      </div>


    </div>
  )
}

export default ExpandedChallenge