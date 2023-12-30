import { Checkbox, ClickAwayListener, Dialog } from '@mui/material';
import './dialogs.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, joinChallenge } from '../../redux/actions/challengeActions'
import CloseIcon from '../../assets/icons/close-icon.svg'
import LogoutIcon from '../../assets/icons/logout-icon.svg'
import { useNavigate } from 'react-router-dom';


const JoinPopup = ({ open, setOpen, challenge }) => {

    const dispatch = useDispatch();
    const [isd, setisd] = useState(false);
    const join = () => {
        const data = {
            challengeId: challenge._id,
            totalnoOfDays: challenge.noOfdays,
            includeStartDate: isd,
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
                    {
                        challenge?.datewise === true?
                        <></>:
                        <div className="startfromtoday">

                        <Checkbox
                            checked={isd}
                            onChange={(e) => {
                                setisd(e.target.checked)
                            }}
                        />
                        <p>Start From Today.</p>
                    </div>
                    
                    }
                   
                    <button className="btn_1" onClick={join}>Join</button>
                </div>
            </ClickAwayListener>
        </Dialog>
    )
}

const JoinedPopup = ({ open, navigate }) => {

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


const AddNotePopup = ({ open, challengeId, closePopup, minimizePopup }) => {
    const dispatch = useDispatch();
    const { savingNote, savedNote } = useSelector((state) => state.challenge)
    const [note, setNote] = useState('')
    useEffect(() => {
        if (savedNote === true) {
            closePopup();
        }
    }, [savedNote])

    const submitNote = () => {
        let data = {};
        dispatch(addNote(
            data = {
                note: note,
                challengeID: challengeId,
            }
        ))
    }

    return (
        <Dialog open={open}>
            <div className="add_note_box">
                <div className="header">
                    <p className="add_note_header">Add Note</p>
                    <img src={CloseIcon} onClick={() => { closePopup() }} alt="" />
                </div>
                <div className="text_editor">
                    <textarea maxLength={501} placeholder='Write about your day' name="" id="" cols="30" rows="10" value={note} onChange={(e) => {
                        setNote(e.target.value)
                    }}></textarea>
                </div>

                <div className="footer">
                    {
                        savingNote === true ?
                            <button className="submit_button">
                                Saving Note
                            </button>
                            :
                            <button className="submit_button" onClick={submitNote}>
                                Save Note
                            </button>
                    }


                    <p className="characterCount">{note.length}/501</p>
                </div>
            </div>
        </Dialog>

    )
}


const LogoutPopup = ({open , closePopup}) => {
    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem("token");
        navigate('/login')
    }

    return (
        <Dialog open={open}>
                <div className="logout_popup">
                    <img src={LogoutIcon} alt="" />
                    <div className="content">
                        <h3>Logout</h3>
                        <p>Are you sure you want to logout?</p>
                    </div>
                    <div className="buttons">
                        <button onClick={closePopup}>No</button>
                        <button className='yes_resp' onClick={logout}>Yes</button>
                    </div>
                </div>
        </Dialog>
    )
}

export { JoinPopup, JoinedPopup, AddNotePopup , LogoutPopup }