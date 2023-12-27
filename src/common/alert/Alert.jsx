import React from 'react'
import './alert.scss'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CrossIcon from '../../assets/icons/close-icon-black.svg';

const AlertRibbon = ({ open, setOpen, message, severity }) => {
    return (

        <div className="alert">
            <Collapse in={open}>
                <Alert
                    severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            style={{outline:"none"}}
                            onClick={() => {
                                setOpen({flag:false , message:"" , type:""});
                            }}
                        >
                            <img src={CrossIcon} alt="" />
                        </IconButton>
                    }
                    sx={{ mb: 0, padding: "0 20px", height: "50px", display: "flex", alignItems: "center" }}
                >
                    <p>{message}</p>
                </Alert>
            </Collapse>
        </div>

    )
}

export default AlertRibbon
