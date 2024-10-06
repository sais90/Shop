import { useCallback, useState } from "react";

export const useEyeVisibilityController = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordShown = useCallback(() => {
        setPasswordShown(s => !s);
    }, [])

    return {
        passwordShown,
        togglePasswordShown
    }


}