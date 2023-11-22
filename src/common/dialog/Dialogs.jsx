import {Checkbox, ClickAwayListener, Dialog } from '@mui/material';
import './dialogs.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {joinChallenge} from '../../redux/actions/challengeActions'

const JoinPopup = ({ open, setOpen , challenge }) => {
    
    const dispatch = useDispatch();
    const [isd , setisd]= useState(false);
    const join = () => {
        const data = {
            challengeId: challenge._id,
            totalnoOfDays: challenge.noOfdays,
            includeStartDate:isd,
        }

        dispatch(joinChallenge(data))
        


    }
    return (
        <Dialog open={open}>
            <ClickAwayListener onClickAway={() => { setOpen(false) }}>
                <div className="join_popup">
                    {/* <p className='d_text_1'>?</p> */}
                    <p className='d_text_2'>Once joined, there's only two Options <br />Completed or Failed</p>
                    <p className='d_text_3'>Wanna Improve yourself?</p>
                    <div className="startfromtoday">

                        <Checkbox
                            checked={isd}
                            onChange={(e) => {
                                setisd(e.target.checked)
                            }}
                        />
                        <p>Start From Today.</p>
                    </div>
                    <button className="btn_1" onClick={join}>Join</button>
                </div>
            </ClickAwayListener>
        </Dialog>
    )
}

const JoinedPopup = ({open , navigate}) => {

    return (
        <Dialog open={open}>
            <div className="joined_popup">
                <p className="p_emoji"> 🥳 </p>
                <p className="d_text_2">Congratulations</p>
                <button className="go_dashboard" onClick={navigate}>Go To Challenge</button>
            </div>
        </Dialog>
    )
}

export {JoinPopup , JoinedPopup}