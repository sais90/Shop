import { useState, useCallback } from 'react';
import { InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const EyeVisibility = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordShown = useCallback(() => {
        setPasswordShown(s => !s);
    }, [])

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


