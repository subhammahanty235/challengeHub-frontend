import React, { useState } from 'react'
import './createChallenge.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import { ClickAwayListener } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createChallenge } from '../../redux/actions/challengeActions'
import {JoinedPopup} from '../../common/dialog/Dialogs'
import { useNavigate } from 'react-router-dom';
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        // borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 125,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                // color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}))
const CreateChallenge = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { challengeCreated } = useSelector((state) => state.challenge);
    const visibilities = ['Public', 'Private', 'Protected']
    const [anchorE1, setAnchorE1] = useState(null)
    const open = Boolean(anchorE1)
    const [selectedVisibility, setSelectedVisibility] = useState(visibilities[0])
    const [includeStartDate, setincludeStartDate] = useState(false)

    const handleClick = (e) => {
        setAnchorE1(e.currentTarget)
    }

    const handleSelect = (item) => {

        setSelectedVisibility(item)
        setChallengeData({ ...challengeData, visibility: item })
        setAnchorE1(null)
    }

    const closeDropdown = () => {
        setAnchorE1(null)
    }

    const clearChallengeHandler = () => {
        setincludeStartDate(false);
        setChallengeData({ name: '', description: '', noOfdays: '', visibility: 'Public' })
    }


    const [challengeData, setChallengeData] = useState({ name: '', description: '', noOfdays: '', visibility: selectedVisibility });

    const onChange = (e) => {
        setChallengeData({ ...challengeData, [e.target.name]: e.target.value })
    }



    const navigatetoHomepage = () => {
        dispatch({
            type: "CLEAR_CREATE_CHALLENGE_TEMP"
        })
        navigate('/')
    }




    return (
        <div className='createChallenge_form'>
            <p className="heading">Create New Challenge</p>

            <div className="main_form">
                <div className="name">
                    <label htmlFor="">Name*</label>
                    <input placeholder='Write Challenge name' type="text" name='name' value={challengeData.name} onChange={(e) => { onChange(e) }} />
                </div>
                <div className="description">
                    <label htmlFor="">Description</label>
                    <textarea placeholder='Write Description (maximum 500 characters)' name="description" id="" cols="30" rows="10" maxLength={500} value={challengeData.description} onChange={(e) => { onChange(e) }}></textarea>
                </div>
                <div className="days_and_visibility">
                    <div className="days">
                        <label htmlFor="">Days*</label>
                        <input placeholder='Write the Duration' type="number" min={1} name='noOfdays' value={challengeData.noOfdays} onChange={(e) => { onChange(e) }} />
                    </div>
                    <div className="visibility">
                        <label htmlFor="Visibility">Visibility  </label>

                        <ClickAwayListener onClickAway={closeDropdown}>
                            <div className="visibility_selection">
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    // variant="contained"
                                    style={{ color: "#fff", border: "none", outline: "none", fontWeight: 500 }}
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    {selectedVisibility}
                                </Button>

                                <StyledMenu
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorE1}
                                    open={open}
                                    onClose={closeDropdown}
                                >

                                    {
                                        visibilities.filter((item) => item !== selectedVisibility).map((item) => {
                                            return <MenuItem onClick={() => { handleSelect(item) }} disableRipple>
                                                {
                                                    item
                                                }
                                            </MenuItem>
                                        })
                                    }

                                </StyledMenu>
                            </div>
                        </ClickAwayListener>
                    </div>
                </div>



            </div>
            <div className="detailed">
                <p>Please fill details carefully to help others understand your challenge easily and As you are creating this challenge you will be auto enrolled.  </p>
            </div>
            <div className="startfromtoday">
                <Checkbox
                    style={{ color: "#fff" }}
                    checked={includeStartDate}
                    onChange={(e) => {
                        setincludeStartDate(e.target.checked)
                        console.log("Clicked")
                    }}
                />
                <p>Start From Today, Only applicable to you (if selected) and users who will select it.</p>
            </div>



            <div className="buttons">

                <button className="clear" onClick={() => {
                    clearChallengeHandler()
                }}> Delete</button>
                <button className="save" onClick={() => {
                    // console.log(challengeData)
                    dispatch(createChallenge(challengeData, includeStartDate))
                }}>Save</button>
                {/* <img src={Delete} alt="" /> */}
            </div>
            <JoinedPopup open={challengeCreated} navigate={navigatetoHomepage} /> 
        </div>
    )
}

export default CreateChallenge