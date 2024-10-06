import { useState, useCallback } from 'react';
import { InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import s from '../../../pages/login/Login.module.css';
import { useEyeVisibilityController } from './useEyeVisibilityController';

export const EyeVisibility = () => {
    // const [passwordShown, setPasswordShown] = useState(false);

    // const togglePasswordShown = useCallback(() => {
    //     setPasswordShown(s => !s);
    // }, [])

    const {
        passwordShown,
        togglePasswordShown
    } = useEyeVisibilityController();

    return (
        <InputAdornment position="end" onClick={togglePasswordShown}>
            {!passwordShown ? (
                <VisibilityIcon className={s.eye_icon} />
            ) : (
                <VisibilityOffIcon className={s.eye_icon} />
            )}
        </InputAdornment>
    )
}



